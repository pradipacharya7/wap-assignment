<%@ page import="java.util.List" %>
<%@ page import="model.Product" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: pradi
  Date: 6/18/2020
  Time: 5:04 AM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script>
        var manageSerialNumber = function () {
            var tbody = $('tbody');
            var sn = 1;
            tbody.find('tr').each(function (e) {
                $(this).find("td:nth-child(1)").text(sn++);
            })
        }
        $(function () {
            $('#submit').click(function () {
                alert("here");
                var name = $('#name').val();
                var cost = $('#cost').val();
            var data={
                name:name,cost:cost};
                $.post('product',{product: JSON.stringify(data)}, returnedFxn, "json")
            })
            function returnedFxn(data){
                alert("here");
                var tr = `<tr id="${data.id}"><td></td><td>${data.name}</td><td>${data.cost}</td><td><button class="edit-btn" value="${data.id}" ><i class="fa fa-edit"></i></button>
              <button class="delete-btn" value="${data.id}"><i class="fa fa-trash-o"></i></button></td></tr>`;
                $('#product-table>tbody').append(tr);
                manageSerialNumber();
                $('#product-form').trigger("reset");
                alert("Sucessfuly inserted");
            }
            $(document).on('click','.delete-btn',function(e){
                alert("here");
                var p_id=$(this).val();
                alert(p_id);
                $.ajax({
                    url: '/product?id='+p_id,
                    type: 'DELETE',
                    dataType:'json',
                    // data:{id:p_id},

                    success: function(data) {
                        alert("here");
                        manageSerialNumber();
                        alert(data);
                    }
                });
                // $.post('/delete',{id:c_id},returnedDel,'json');
                $(this).parents('tr').remove();
            })

            // function returnedDel(data)
            // {
            //     manageSerialNumber();
            //     alert(data);
            // }

        })
    </script>
</head>
<body>
<table id="product-table">

    <thead>
    <tr>
    <th> #</th>
    <th>Name</th>
    <th>Cost</th>
        <th>Action</th>

    </tr>
    </thead>

<%--    <c:forEach items="products" var="product">--%>
<%--    <tr>--%>
<%--        <td><c:out value=" ${count+1}" /></td>--%>
<%--        <td><c:out value=" ${product.name}" /></td>--%>
<%--        <td><c:out value=" ${product.cost}" /></td>--%>
<%--    </tr>--%>
<%--    </c:forEach>--%>
    <c:forEach items="${products}" var="p">
        <c:set var="count" value="${count + 1}" scope="page"/>
        <tr id="${p.id}">
            <td><c:out value="${count}" /></td>
            <td><c:out value="${p.name}" /></td>
            <td><c:out value="${p.cost}" /></td>
            <td><button type="button" class="delete-btn" value="${p.id}">Delete</button>
                <button type="button" class="edit-btn" value="${p.id}">Edit</button></td>
        </tr>
    </c:forEach>
</table>
<div>
    <form id="product-form">
        <label>Name</label><input type="text" name="name" id="name"><br>
        <label>Cost</label><input type="text" cost="cost" id="cost"><br>
        <input type="submit" name="submit" id="submit">
    </form>
</div>
</body>
</html>
