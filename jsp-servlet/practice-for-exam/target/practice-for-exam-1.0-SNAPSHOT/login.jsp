<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: pradi
  Date: 6/17/2020
  Time: 10:04 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/login" method="post">
    <label>Username</label><input type="text" name="username" value="${cookie.username.value}"><br>
    <label>Password</label><input type="password" name="password" value=""><br>
    <input type="checkbox" name="remember" <c:if test="${cookie.containsKey('username')}">checked</c:if> value="1" >Remember Me <br>

    <span style=" color:red;"> ${err_msg}</span><br>
    <input type="submit" name="submit" value="Submit"><br>
</form>

</body>
</html>
