package controller;

import com.google.gson.Gson;
import dao.ProductDao;
import model.Product;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/product")
public class ProductController extends HttpServlet {
    ProductDao productDao;
    Gson mapper=new Gson();
    @Override
    public void init() throws ServletException {
        productDao=new ProductDao();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//     List<Product> products= productDao.getAllProducts();
//        System.out.println(products);
     req.setAttribute("products",productDao.getAllProducts());
     req.getRequestDispatcher("product.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jsonSting = req.getParameter("product");
        Product product = mapper.fromJson(req.getParameter("product"), Product.class);
        product.setId(productDao.generateId());
        productDao.addProduct(product);

        PrintWriter out = resp.getWriter();

        out.print(mapper.toJson(product));
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String  id = req.getParameter("id");

        System.out.println(id);
        productDao.deleteProduct(Integer.valueOf(id));
        String data="Successfully Deleted";
        PrintWriter out = resp.getWriter();
        out.print(mapper.toJson(data));
    }
}
