package model;

import java.time.LocalDate;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String title;
    private LocalDate releaseDate;
    private String genre;
    private double rating; 
    @Column(length = 1000)
    private String thougts;
    private boolean recommend; 


    

 }