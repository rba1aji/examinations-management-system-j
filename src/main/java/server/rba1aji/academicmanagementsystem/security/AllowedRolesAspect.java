package server.rba1aji.academicmanagementsystem.security;

import jakarta.servlet.http.HttpServletRequest;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.file.AccessDeniedException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Aspect
@Component
public class AllowedRolesAspect {
    @Autowired
    private HttpServletRequest httpRequest;

    @Around("@annotation(allowedRoles)")
    public Object verifyRolesAccess(ProceedingJoinPoint joinPoint, AllowedRoles allowedRoles) throws Throwable {
        String role = (String) httpRequest.getAttribute("role");
        Set<String> allowedRolesSet = new HashSet<>(Arrays.asList(allowedRoles.value()));
        try {
            if (allowedRolesSet.contains(role)) {
                return joinPoint.proceed();
            } else {
                throw new AccessDeniedException("Access denied. Only users with roles " + Arrays.stream(allowedRoles.value()).toList() + " can access this resource.");
            }
        } catch (Throwable t) {
            throw new RuntimeException(t.getMessage());
        }
    }
}
