package controller;

import dao.UserDao;
import model.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/login")
public class UserServlet extends HttpServlet {
    private UserDao userDao;
    @Override
    public void init() throws ServletException {
       userDao = new UserDao();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("login.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String username=req.getParameter("username");
    String password=req.getParameter("password");
    User user=userDao.findUser(username,password);

    if(user!=null) {
        req.getSession().setAttribute("user", user);

        if (req.getParameter("remember") != null) {
            Cookie cookie = new Cookie("name", user.getUsername());
            cookie.setMaxAge(3600);
            resp.addCookie(cookie);

        } else {
            Cookie cookie = new Cookie("name", null);
            cookie.setMaxAge(0); //in seconds response.addCookie(cookie);
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
