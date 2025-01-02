package com.example.Movie.service.implementation;

import java.util.Collection;

import org.springframework.stereotype.Service;
import org.springframework.data.domain.PageRequest;

import com.example.Movie.model.Movie;
import com.example.Movie.repo.MovieRepo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.example.Movie.service.MovieService;
/*
 * This class is the implementation of the MovieService interface. It contains the methods to interact with the database.
 */
@RequiredArgsConstructor
@Service
@Slf4j
public class MovieServiceImp implements MovieService {
    private final MovieRepo movieRepo;
  



    @Override
    public Movie createMovie(Movie movie) {
        log.info("Creating movie: {}", movie);
        return movieRepo.save(movie);
    }

    @Override
    public Collection<Movie> list(int limit) {
        return movieRepo.findAll(PageRequest.of(0, limit)).toList();
       
    }

    @Override
    public Movie getMovie(Long id) {
        log.info("Getting movie with id: {}", id);
        return movieRepo.findById(id).get();
    }

    @Override
    public Movie updateMovie(Movie movie) {
        log.info("Updating movie: {}", movie);
        return movieRepo.save(movie);
    }

    @Override
    public Boolean deleteMovie(Long id) {
        log.info("Deleting movie with id: {}", id);
        movieRepo.deleteById(id);
        return true;
    }
    
}
