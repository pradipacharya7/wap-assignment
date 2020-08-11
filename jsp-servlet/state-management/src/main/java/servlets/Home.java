package servlets;

import services.User;
import services.UserDb;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("")
public class Home extends HttpServlet {
    UserDb userDb;
    @Override
    public void init() throws ServletException {
        super.init();
        userDb = new UserDb();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("index.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        User user = userDb.findByUser((String) req.getParameter("username"),(String) req.getParameter("password"));
        if(user != null){
            HttpSession session = req.getSession();

            if(req.getParameter("remember") != null){
                if (req.getParameter("remember").equals("1")){
                    session.setMaxInactiveInterval(60*60*24*30);//for 30 days
                }
                session.setAttribute("userInfo",user);
            }else{
//                session.setMaxInactiveInterval(5);
                session.setAttribute("userInfo",user);
            }
            resp.sendRedirect("/dashboard");
        }else {
            resp.sendRedirect("/");
        }
    }
}
