<%@ page import="services.User" %><%--
  Created by IntelliJ IDEA.
  User: samsherrana
  Date: 6/9/20
  Time: 10:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title><%=request.getServletContext().getInitParameter("default_title")%></title>
    <link rel="stylesheet" type="text/css" href="/assets/style.css">
  </head>
  <body>
  <%
    User user = (User) request.getSession().getAttribute("userInfo");
    String username = "";
    String password = "";
    String rememberMe = "";
    if(user != null){
      username = user.getUsername();
      password = user.getPassword();
      rememberMe = "checked";
    }
  %>
  <div class="w-50 m-auto">
    <h3 class="mt-30 mb-15 pt-15">Login Form</h3>
    <p class="mb-15">Username:user1 password:user1 or Username:user2 password:user2</p>
    <form action="/" method="post" autocomplete="off">
      <div class="mb-15">
        <label for="username">UserName:</label>
        <input name="username" id="username" type="text" autocomplete="false" value="<%=username%>">
      </div>
      <div class="mb-15">
        <label for="password">Password:</label>
        <input name="password" id="password" type="password" autocomplete="false" value="<%=password%>">
      </div>
      <div class="mb-15">
        <label><input name="remember" value="1" type="checkbox" <%=rememberMe%> > Remember me</label>
      </div>
      <div class="mb-15">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
  </body>
</html>
