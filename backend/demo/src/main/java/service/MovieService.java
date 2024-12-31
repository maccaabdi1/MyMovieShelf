package service;

import java.util.Collection;

import org.springframework.web.multipart.MultipartFile;

import model.Movie;

public interface MovieService {
    
    Movie create(Movie movie, MultipartFile image);
    Collection<Movie>list(int limit);
    Movie searchByTitle(String title);
    Collection<Movie>searchByGenre(String genre);
    Collection<Movie>listRecs(boolean recommend);
    Movie get(long id);
    Movie update(Movie movie);
    Movie updateRating(long id, double rating);
    Movie updateThougts(long id, String thoughts);
    Boolean delete(long id); 
    Collection<Movie> createBulk(Collection<Movie> movies);
    Boolean deleteBulk(Collection<Long> ids);

}
