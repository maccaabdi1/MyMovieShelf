package com.example.Movie.model;

import java.time.LocalDate;

import jakarta.annotation.Generated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class CalendarEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate watchDate;
    private String movieTitle;
    private String description;

    public Long getId() {
        return id;
    }
    public LocalDate getWatchDate() {
        return watchDate;
    }
    public String getMovieTitle() {
        return movieTitle;
    }
    public String getDescription() {
        return description;
    }
    public void setLocalDate(LocalDate watchDate) {
        this.watchDate = watchDate;
    }
    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    


    
}
