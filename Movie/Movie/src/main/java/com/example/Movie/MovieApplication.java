package com.example.Movie;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.Movie.model.Movie;
import java.time.LocalDate;
import com.example.Movie.repo.MovieRepo;

@SpringBootApplication
public class MovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieApplication.class, args);
	}

	@Bean
	CommandLineRunner run(MovieRepo movieRepo) {
		return args -> {
			movieRepo.save(new Movie(null, "The Matrix", LocalDate.of(1999, 3, 31), "Action", 9, "Keanu Reeves is one of my favorite actors"));
			movieRepo.save(new Movie(null, "The Matrix Reloaded", LocalDate.of(2003, 5, 15), "Action", 8, "Keanu Reeves is one of my favorite actors"));
		};
	}
	}




