package com.example.Movie.service;

import java.util.Collection;

import com.example.Movie.model.Movie;

public interface MovieService {

    Movie createMovie(Movie movie);

    Collection<Movie> list(int limit);

    Movie getMovie(Long id);

    Movie updateMovie(Movie movie);

    Boolean deleteMovie(Long id);



    
}
    

