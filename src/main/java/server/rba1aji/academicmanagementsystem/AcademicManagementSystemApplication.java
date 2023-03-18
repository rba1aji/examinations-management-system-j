package server.rba1aji.academicmanagementsystem;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AcademicManagementSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(AcademicManagementSystemApplication.class, args);
//        System.out.println(BCrypt.hashpw("admin", BCrypt.gensalt(10)));
    }

//    @Bean
//    public FilterRegistrationBean<AuthFilter> filterRegistrationBean() {
//        FilterRegistrationBean<AuthFilter> registrationBean = new FilterRegistrationBean<>();
//        AuthFilter authFilter = new AuthFilter();
//        registrationBean.setFilter(authFilter);
//        registrationBean.addUrlPatterns("/api/*");
//        return registrationBean;
//    }

}
