package com.example.Movie.repo;

import com.example.Movie.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

/*
 * This class is the repository for the Movie object. It contains the methods to interact with the database.
 */
public interface MovieRepo extends JpaRepository<Movie, Long> {

    Movie findByTitle(String title);

}
    

