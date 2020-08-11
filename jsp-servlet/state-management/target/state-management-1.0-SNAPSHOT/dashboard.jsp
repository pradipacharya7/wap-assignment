<%@ page import="services.User" %><%--
  Created by IntelliJ IDEA.
  User: samsherrana
  Date: 6/10/20
  Time: 1:02 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title><%=request.getServletContext().getInitParameter("default_title")%></title>
    <link rel="stylesheet" type="text/css" href="/assets/style.css">
</head>
<body>
<div class="w-50 m-auto">
    <% User user = (User) request.getSession().getAttribute("userInfo"); %>
    <h3 class="mt-30 mb-15">Welcome <%=user.getUsername()%> !! <a href="/logout" class="fr">Logout</a></h3>
</div>
</body>
</html>
