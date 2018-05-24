package issuetracker;

import issuetracker.auth.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
class WebConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry
				.addMapping("/**")
				.allowedOrigins("http://localhost:3000")
				.allowedHeaders("authorization", "content-type")
				.allowedMethods("HEAD", "GET", "POST", "PATCH", "DELETE");
	}
}

@SpringBootApplication
public class Application {
	@Bean
    public FilterRegistrationBean jwtFilter() {
	    final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
	    registrationBean.setFilter(new JwtFilter());
	    registrationBean.addUrlPatterns("/v1/*");

	    return registrationBean;
    }

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
