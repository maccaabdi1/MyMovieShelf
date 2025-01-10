package com.example.Movie;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.Movie.model.Movie;

import com.example.Movie.repo.MovieRepo;

@SpringBootApplication
public class MovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieApplication.class, args);
	}
	// @Bean
	// CommandLineRunner init(MovieRepo movieRepo) {
	// 	return args -> {
	// 		movieRepo.save(new Movie(null,"Example Movie 1","actionm:",LocalDate.of(2023, 10, 1),5,"Loved it!"));
			
			
	// 	};

	
	// }

}




