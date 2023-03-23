package server.rba1aji.academicmanagementsystem.security;

import jakarta.servlet.http.HttpServletRequest;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.file.AccessDeniedException;

@Aspect
@Component
public class AdminOnlyAspect {
    @Autowired
    private HttpServletRequest httpRequest;

    @Around("@annotation(AdminOnly)")
    public Object verifyAdminRole(ProceedingJoinPoint joinPoint) {
        try {
            if (httpRequest.getAttribute("role").equals("admin")) {
                return joinPoint.proceed();
            } else {
                throw new AccessDeniedException("Only admin can access this resource.");
            }
        } catch (Throwable t) {
            throw new RuntimeException("Only admin can access it.");
        }
    }

}
