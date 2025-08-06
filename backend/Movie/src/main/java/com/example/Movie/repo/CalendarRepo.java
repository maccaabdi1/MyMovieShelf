package com.example.Movie.repo;

import java.time.LocalDate;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Movie.model.CalendarEvent;

public interface CalendarRepo extends JpaRepository<CalendarEvent, Long> {

    List<CalendarEvent> findByWatchDateBetween(LocalDate watchDate);


    

    
}
