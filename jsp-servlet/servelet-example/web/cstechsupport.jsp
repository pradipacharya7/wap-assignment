    <%--
      Created by IntelliJ IDEA.
      User: pradi
      Date: 6/8/2020
      Time: 9:17 PM
      To change this template use File | Settings | File Templates.
    --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/serveletdemo_war/support" method="post">
   <label>Name</label><br> <input type="text" name="name"><br>
    <label>Email Address</label><br><input type="email" name="email"><br>
    <label>Problem</label><br><input type="text" name="problem"><br>
    <label>Problem Description</label><br>
    <textarea rows="10" cols="100" name="problem_description"></textarea><br>
    <input type="submit" name="submit" value="Submit"><br>
</form>
</body>
</html>
