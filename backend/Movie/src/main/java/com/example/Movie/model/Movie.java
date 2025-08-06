package com.example.Movie.model;
import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * This class is the model for the Movie object. It contains the attributes of a movie object.
 * @author Macca A
 * @version 1.0
 * @since 2025-01-01
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotEmpty(message = "Title is required")
    private String title;
    
    private LocalDate watchDate;
    
    private String genre;

    private LocalDate releaseDate;
    
    @Min(1) @Max(5)
    private int rating;
    
    @Column(length = 1000)
    private String notes;

    @Enumerated(EnumType.STRING)
    private MovieStatus status;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
    public LocalDate getReleaseDate() {
        return releaseDate;
    }
    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }   
    public MovieStatus getStatus() {
        return status;
    }
    public LocalDate getWatchDate() {
        return watchDate;
    }
    public void setStatus(MovieStatus status) {

        this.status = status;

    }
}
