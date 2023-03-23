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
public class StudentOnlyAspect {
    @Autowired
    HttpServletRequest httpRequest;

    @Around("@annotation(StudentOnly)")
    public Object verifyFacultyRole(ProceedingJoinPoint joinPoint) {
        try {
            if (httpRequest.getAttribute("role").equals("faculty"))
                return joinPoint.proceed();
            else throw new AccessDeniedException("Only faculty can access this resource");
        } catch (Throwable t) {
            throw new RuntimeException("Only students can access this");
        }
    }
}
