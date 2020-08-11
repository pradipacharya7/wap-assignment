import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Random;

@WebServlet("/support")
public class CstechSupport extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        resp.getWriter().print("sdf");
             req.getRequestDispatcher("/cstechsupport.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            Random rdm = new Random();
            Integer randNumber = (Integer) Math.abs(rdm.nextInt()*10000);
            req.setAttribute("randomNumber",randNumber);
            req.getRequestDispatcher("/support_details.jsp").forward(req, resp);
        }
    }

