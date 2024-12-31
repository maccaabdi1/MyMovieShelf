package repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Movie;

public interface MovieRepo extends JpaRepository<Movie,Long>
{
    Movie findByTitle(String title);
    List<Movie> findByGenre(String genre);
    List<Movie> findByRecommend(boolean recommend);
    Movie findById(long id);
} 
    

