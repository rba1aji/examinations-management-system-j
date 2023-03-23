package server.rba1aji.academicmanagementsystem.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@PropertySource("classpath:application.properties")
public class JWToken {

    @Value("${apisecretkey}")
    private String apisecretkey;

    public String generateJWTToken(String role) {
        long now = System.currentTimeMillis();
        String token = Jwts.builder()
                .signWith(
                        SignatureAlgorithm.HS256,
                        apisecretkey
                )
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + 12 * 60 * 60 * 1000))
                .claim("role", role)
                .compact();
        return token;
    }
}
