require('../commonlib/core.js');

program.version(szMyName)
    .option('-u, --url [value]', 'url, no default')
    .option('--user [value]', 'authorization 认证用户名')
    .option('--pswd [value]', 'authorization 认证用户密码')
    .option('--cookie [value]', 'cookie的值')
    .option('--path [value]', '存储目录')
    .option('--threads [value]', '线程数,默认100')
    .option('--filter [value]', '过滤类型，例如;\\.(html|htm|ppt|pptx|doc|docx|xls|xlsx|pdf|vsd|mmap|txt|jdbc.properties|png|jpg|svg|cdm|pdm)$')
    .on('--help',fnMyHelp)  
    .parse(process.argv);

// 调整文件的最后修改日期
function fnChangeStat(szFileName, lastMdf)
{
    fs.utimesSync(szFileName,lastMdf / 1000, lastMdf / 1000);
}

var g_szPath = program.path || '../data/svn/';
mkdirs(g_szPath);

var Crawler = require("crawler"),
    headers = !!program.user? {
        authorization: 'Basic ' + fnMkUp(program.user, program.pswd).replace(/\s/gmi, '')
    }:{},
    // 避免重复
    g_noReqUrls = {},
c = new Crawler(
{
    debug:'error',
    skipDuplicates:true,
    maxConnections : program.threads||100,
    "headers":headers,
    callback : function (e, res, done)
    {
        if(e)console.log(e);
        else
        {
            var szUrl = res.request.href,type = res.headers['content-type'] || '',
                szMyIndex = ".index.mtx", fnIdx = function(s)
                {
                    if(/\/$/gmi.test(s))
                    {
                        s += szMyIndex;
                    }
                    return s;
                };
            // 1、如果目录不存在则建立目录，为文件存储做准备
            // mkdirs(szP1 = g_szPath + decodeURI(res.request.uri.path));
            var szFileName = g_szPath + decodeURI(res.request.uri.path),bIndex = false;
            // console.log([type,szUrl]);
            // 目录的请求，或html类型

            if(-1 < type.indexOf('text/html'))
            {
                var $ = res.$ || function(x){return []}, a = $("a"), s,s1;
                // 缓存索引
                // 那么还得考虑加载索引
                var aT = [];
                if(0 < a.length)
                {
                    for(var k = 0; k < a.length; k++)
                    {
                        if('../' == a[k].attribs.href || 
                        './' == a[k].attribs.href)continue;
                        aT.push(a[k].attribs.href);
                    }
                    res.body = JSON.stringify(aT,null,' ');
                }
                // else console.log(res.body);
                for(var k = 0; k < a.length; k++)
                {
                    // s1 = res.request.href  + decodeURI(a[k].attribs.href); 
                    s = res.request.href  + a[k].attribs.href; 

                    // 处理过了就不处理了，  上级、本级目录
                    if(g_noReqUrls[s] || '../' == a[k].attribs.href || 
                        './' == a[k].attribs.href)continue;
                    g_noReqUrls[s] = 1;

                    // 1、符合过滤情况
                    if(program.filter)
                    {
                        try{
                            var rgFlt = new RegExp(program.filter,'gmi');
                            // 不符合就继续,但是目录路径得继续
                            if( !rgFlt.test(s) && !(/\/$/gmi.test(s)))
                                continue;
                        }catch(e)
                        {
                            console.log("--filter 参数不正确，将跳过该参数的作用");
                            console.log(e);
                        }
                    }
                    
                    // 通过最后修改时间发出请求, HEAD
                    // Connection: keep-alive 
                    // 带上最后的修改日期，If-Modified-Since
                    // console.log([decodeURI(a[k].attribs.href),decodeURI(res.request.uri.path)]); 
                    // 2、获取最后的修改时间，添加到头信息中，只获取修改过的
                    // 如果是目录，则获取索引index.mtx文件
                    var szP1 = szFileName + decodeURI(a[k].attribs.href);
                    // 获取单个文件的修改状态，然后继续请求
                    var fnDoOneUrl = function(szF,href,szReqPath)
                    {
                        // console.log(szReqPath);
                        szReqPath || (szReqPath = szF);
                        if(/\/$/gmi.test(szF))
                        {
                            mkdirs(szF);
                            szF += szMyIndex;
                        }
                        var s1 = href + szReqPath; 
                        var oT1 = fnGetFileStat(szF);
                        var  hs = headers;
                        // 获取到本地文件的最后修改日期
                        if(oT1)
                        {
                            // console.log(szP1 + "oT1.mtime = " + oT1.mtime.toUTCString());
                            // console.log(oT1.mtime.toUTCString());
                            hs = {"If-Modified-Since":oT1.mtime.toUTCString()};
                            hs = copyO2O(headers,hs);
                            // 更新目录的同时，加载缓存，并驱动下一层的爬虫
                            if(-1 < szF.indexOf(szMyIndex))
                            {
                                var y = JSON.parse(fs.readFileSync(szF).toString()), 
                                    szTT = szF.substr(0,szF.lastIndexOf('/'));
                                szTT = szTT.substr(0,szTT.lastIndexOf('/') + 1);
                                console.log("read " + szF);
                                for(var x1 = 0; x1 < y.length; x1++)
                                {
                                    // y[x1] = decodeURI(y[x1]);
                                    // console.log([szTT+decodeURI(szReqPath) + y[x1],href,decodeURI(szReqPath + y[x1])]);
                                    fnDoOneUrl(szTT + szReqPath + y[x1],href, szReqPath + y[x1]);
                                    // fnDoOneUrl(szTT + szReqPath + y[x1],href);
                                }
                            }
                        }
                        // console.log(hs);
                        // 继续爬...，任务进入任务池
                        c.queue({uri:s1,headers:hs});
                    };
                    
                    fnDoOneUrl(szP1,res.request.href,a[k].attribs.href);
                    
                    //else console.log(s);
                }
            }
            // 无论是目录请求、还是文件请求，都要保存
            // console.log([decodeURI(res.request.uri.path)]);
            
            var n = res.headers["content-length"];
            // 文件长度无效就不处理了
            if(n)
            {
                // 目录请求时文件名的修正
                szFileName = fnIdx(szFileName);

                mkdirs(szFileName.substr(0, szFileName.lastIndexOf('/')));

                fs.writeFileSync(szFileName,res.body);
                // 修改日期
                if(res.headers['last-modified'])
                {
                    var date = new Date(Date.parse(res.headers['last-modified']));
                    fnChangeStat(szFileName, date.getTime());
                }
                if(-1 < szFileName.indexOf(szMyIndex))
                    console.log("Ok " + szFileName);
            }
            // console.log($("title").text());
        }
        done();
    }
});
if(program.url)
{
    c.queue({
        uri:program.url
    });
}

//*//////////////////////////
var y = JSON.parse(fs.readFileSync("../data/svn/indexAll.txt").toString());
for(var k in y)
{
    var oT = y[k];
    // node mySpider.js -u http://118.112.188.108:8090/svn/JY12GD01003 --user linsen --pswd lins226621 --filter '\.(html|htm|txt|jdbc.properties|svg|cdm|pdm|java)$' --threads 11 --path ../data
    if('linsen' != k)
    if(oT['svns'])
    {
        var o1 = oT['svns'];
        for(var x in o1)
        {
            +function(k,oT,x1)
            {
                // child_process.execSync
                console.log("node mySpider.js -u http://118.112.188.108:8090/svn/" + x1 + " --user linsen --pswd lins226621 --filter '\\.(html|htm|txt|jdbc.properties|svg|cdm|pdm|java|doc|docx|ppt|pptx|xls|xlsx|xml)$' --threads 11 --path ../data &");
                /*////////////
                var kk1 = '';
                // c.queue
                (kk1 = {
                    user:k,
                    uri:"http://118.112.188.108:8090/svn/" + x1,
                    headers:{
                        authorization: 'Basic ' + fnMkUp(k, oT.pwd[oT.pwd.length - 1]).replace(/\s/gmi, '')
                    }
                });
                console.log(kk1);
                /////////////*/
            }(k,oT,o1[x]);
        }
    }
}
//////////////////////////*/