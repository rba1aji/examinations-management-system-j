package server.rba1aji.academicmanagementsystem;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AcademicManagementSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(AcademicManagementSystemApplication.class, args);
//        System.out.println(BCrypt.hashpw("admin", BCrypt.gensalt(10)));
    }

}
