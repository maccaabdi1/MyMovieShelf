package com.example.Movie.model;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;
import lombok.experimental.SuperBuilder;

/*
 * This class is the model for the Response object. It contains the attributes of a response object.
 * @author Macca A
 * @version 1.0
 * @since 2025-01-01
 */

@Data
@SuperBuilder
@JsonInclude(JsonInclude.Include.NON_NULL)

public class Response {
    protected String message;
    protected HttpStatus status;
    protected LocalDateTime timestamp;


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
    
}
