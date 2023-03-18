//package server.rba1aji.academicmanagementsystem.configs;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.ServletRequest;
//import jakarta.servlet.ServletResponse;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.http.HttpStatus;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.GenericFilterBean;
//
//import java.io.IOException;
//
//@Component
//@PropertySource("classpath:application.properties")
//public class AuthFilter extends GenericFilterBean {
//
//    @Value("${apisecretkey}")
//    private String apisecretkey;
//
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
//        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
//        HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;
//
//        String authHeader = httpRequest.getHeader("Authorization");
//        if (authHeader != null) {
//
//            String[] authHeaderArr = authHeader.split("Bearer");
//            if (authHeaderArr.length > 1 && authHeaderArr[1] != null) {
//                String token = authHeaderArr[1];
//                try {
//                    Claims claims = Jwts.parser()
//                            .setSigningKey(apisecretkey)
//                            .parseClaimsJws(token)
//                            .getBody();
//                    httpRequest.setAttribute("userId",
//                            Integer.parseInt(
//                                    claims.get("role").toString()
//                            ));
//                } catch (Exception e) {
//                    httpResponse.sendError(HttpStatus.FORBIDDEN.value(), "invalid/expired token");
//                    return;
//                }
//            } else {
//                httpResponse.sendError(HttpStatus.FORBIDDEN.value(), "Authorization token must be Bearer [token]");
//                return;
//            }
//        } else {
//            httpResponse.sendError(HttpStatus.FORBIDDEN.value(), "Authorization token must be provided");
//            return;
//        }
//        filterChain.doFilter(servletRequest, servletResponse);
//    }
//}
