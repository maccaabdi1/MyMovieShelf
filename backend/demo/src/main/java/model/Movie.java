package model;

import java.time.LocalDate;

import io.micrometer.common.lang.Nullable;
import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Macca Abdi 
 * @version 1.0
 * @since 12/30/24
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
 public class Movie
 {
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank
    private String title;
    @Nullable
    private LocalDate releaseDate;
    private String genre;
    @Min(0) @Max(10)
    private double rating; 
    @Column(length = 1000)
    private String thoughts;
    private boolean recommend; 
    private String imageUrl;

    public Long getId() {
        return id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public LocalDate getReleaseDate() {
        return releaseDate;
    }
    
    public String getGenre() {
        return genre;
    }
    
    public double getRating() {
        return rating;
    }
    
    public String getThoughts() {
        return thoughts;
    }
    
    public boolean isRecommend() {
        return recommend;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setThoughts(String thoughts) {
        this.thoughts = thoughts;
    }

    public void setRecommend(boolean recommend) {
        this.recommend = recommend;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    

 }