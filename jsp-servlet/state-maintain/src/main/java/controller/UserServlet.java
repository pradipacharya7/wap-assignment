package controller;

import model.User;
import service.DataClass;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet("")
public class UserServlet extends HttpServlet {
    DataClass dataClass;
    @Override
    public void init() throws ServletException {
        super.init();
        dataClass=new DataClass();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("/login.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        User user=dataClass.findUser(req.getParameter("username"),req.getParameter("password"));
       if(user!=null)
       {
           req.getSession().setAttribute("username",req.getParameter("username"));
           if(req.getParameter("remember")  != null) {
               Cookie cookie = new Cookie("username",user.getUsername());
               cookie.setMaxAge(3600); //in seconds
               resp.addCookie(cookie);
           }
           else
           {
               Cookie cookie = new Cookie("username",null);
               cookie.setMaxAge(0); //in seconds
               resp.addCookie(cookie);
           }
           resp.sendRedirect("/welcome");
       }
       else {
           req.getSession().setAttribute("err_msg","Please Enter Valid Username and Password");
           resp.sendRedirect("/");
       }

    }
}
