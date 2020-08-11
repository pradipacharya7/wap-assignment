package filter;

import model.User;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.LogRecord;
@WebFilter( filterName = "MyFilter", urlPatterns = { "/welcome", "/welcome/*" } )
public class MyFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpReqest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpResp = (HttpServletResponse) servletResponse;
        User user = (User) httpReqest.getSession().getAttribute("user");
        if(user != null){
            filterChain.doFilter(servletRequest, servletResponse);
        }else {
            System.out.println("session expired");
            httpResp.sendRedirect("/login");
        }
    }

    @Override
    public void destroy() {

    }
}
