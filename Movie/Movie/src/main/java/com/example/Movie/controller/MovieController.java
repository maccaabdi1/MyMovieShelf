package com.example.Movie.controller;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Movie.model.Movie;
import com.example.Movie.model.Response;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
/*
 * This class is the controller for the Movie object. It contains the methods to interact with the database.
 */
@RestController
@RequestMapping("/movie")
@RequiredArgsConstructor
public class MovieController {
  

    @GetMapping("/ge/{id}")
    public ResponseEntity<Response> getMovie(@PathVariable("id") Long id) {
        return ResponseEntity.ok(
            Response.builder()
                .message("Movie retrieved successfully")
                .status(HttpStatus.OK)
                .timestamp(LocalDateTime.now())
                .build()
        );
        
    }
    @PostMapping("/create")
    public ResponseEntity<Response> createMovie(@RequestBody Movie movie) {
        return ResponseEntity.ok(
            Response.builder()
                .message("Movie Created successfully")
                .status(HttpStatus.CREATED)
                .timestamp(LocalDateTime.now())
                .build()
        );
        
    }
    @PutMapping("/update")
    public ResponseEntity<Response> updateMovie(@RequestBody @Valid Movie movie) {
        return ResponseEntity.ok(
            Response.builder()
                .message("Movie Updated successfully")
                .status(HttpStatus.OK)
                .timestamp(LocalDateTime.now())
                .build()
        );
        
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Response> deleteMovie(@PathVariable("id") Long id) {
        return ResponseEntity.ok(
            Response.builder()
                .message("Movie Deleted successfully")
                .status(HttpStatus.OK)
                .timestamp(LocalDateTime.now())
                .build()
        );
        
    }


}