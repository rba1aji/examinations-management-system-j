package server.rba1aji.academicmanagementsystem.configs;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.nio.file.AccessDeniedException;
import java.util.List;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    private List<String> exclusions = List.of(
            "/api/students/login", "/api/admins/login", "/api/faculties/login"
    );

    @Override
    public boolean preHandle(HttpServletRequest httpRequest, HttpServletResponse httpResponse, Object handler) throws Exception {
        try {
            String requestURI = httpRequest.getRequestURI();

            if (exclusions.contains(requestURI)) {
                return true;
            }

            String authHeader = httpRequest.getHeader("Authorization");

            if (authHeader != null) {
                String[] authHeaderArr = authHeader.split("Bearer");
                if (authHeaderArr.length > 1 && authHeaderArr[1] != null) {
                    String token = authHeaderArr[1];
                    try {
                        Claims claims = Jwts.parser()
                                .setSigningKey("ksrctems1994")
                                .parseClaimsJws(token)
                                .getBody();
                        httpRequest.setAttribute(
                                "role", claims.get("role")
                        );
//                        System.out.println(httpRequest.getAttribute("role"));
                    } catch (Exception e) {
                        throw new AccessDeniedException("invalid/expired token - " + e.getMessage());
                    }
                } else {
                    throw new AccessDeniedException("Authorization token must be Bearer [token]");
                }
            } else {
                throw new AccessDeniedException("Authorization token must be provided");
            }
        } catch (Exception e) {
            throw new Exception(e.getMessage() + "at auth interceptor");
        }

        return true;
    }
}
