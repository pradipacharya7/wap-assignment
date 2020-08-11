<%--
  Created by IntelliJ IDEA.
  User: pradi
  Date: 6/10/2020
  Time: 8:47 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<p class="w-70 m-auto">

    Thank you! <%=request.getParameter("name")%> for contacting us. We should receive reply from us with in 24 hrs in your email address <%=request.getParameter("email")%>. Let us know in our support email <%=request.getServletContext().getInitParameter("supportEmail")%> if you don’t receive reply within 24 hrs. Please be sure to attach your reference <%=request.getAttribute("randomNumber")%> in your email.
</p>
</body>
</html>
