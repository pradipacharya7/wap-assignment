<%--
  Created by IntelliJ IDEA.
  User: pradi
  Date: 6/17/2020
  Time: 6:36 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%!int count1 = 0;%>

<%
    int count2 = 0;
%>
The count1 is now:
<%=count1%><br/>
The count2 is now:
<%=count2%><br/>

<%-- This is a jsp scriptlet that increments the counts --%>
<%
    count1++;
    count2++;
%>

The count1 is now:
<%=count1%><br/>
The count2 is now:
<%=count2%>

<%-- <%! int count3 = count1+count2; %> --%>
<!-- This is an html will be copied -->
<%-- But not this JSP comment --%>
</body>
</html>
