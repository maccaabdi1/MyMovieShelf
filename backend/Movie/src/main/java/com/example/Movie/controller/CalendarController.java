package com.example.Movie.controller;


import com.example.Movie.model.CalendarEvent;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Movie.repo.CalendarRepo;

@RestController
@RequestMapping("/calendar")
@CrossOrigin(origins = "http://localhost:4200")
public class CalendarController {

    @Autowired
    private CalendarRepo repo;

    @GetMapping
    public List<CalendarEvent> getAllEvents() {

        return repo.findAll();
    }
    @PostMapping
    public CalendarEvent addEvent(@RequestBody CalendarEvent calendar){
        return repo.save(calendar);
    }
    @PutMapping("/{id}")
    public CalendarEvent updateEvent(@PathVariable Long id, @RequestBody CalendarEvent updateEvent)
    {
        CalendarEvent existingEvent = repo.findById(id).orElse(null);
        if(existingEvent != null){
            existingEvent.setLocalDate(updateEvent.getWatchDate());
            existingEvent.setMovieTitle(updateEvent.getMovieTitle());
            existingEvent.setDescription(updateEvent.getDescription());
            return repo.save(existingEvent);
        }
        return null;
    }
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id){
        repo.deleteById(id);
        return "Event Deleted";
    }

    
}
