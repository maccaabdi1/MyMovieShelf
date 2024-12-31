package service.implementation;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import model.Movie;
import repo.MovieRepo;
import service.MovieService;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class MovieSeviceImplementation implements MovieService{
    private final MovieRepo movieRepo;
    private final String uploadDir = "path/to/upload/directory";
    
    @Override
    public Movie create(Movie movie,MultipartFile image) {
        // TODO Auto-generated method stub
        log.info("Saving new Movie :)", movie.getTitle());
        String imageURL = saveImage(image);
        movie.setImageUrl(imageURL);
                return movieRepo.save(movie);
        }
        
     public String saveImage(MultipartFile image) {
        if (image.isEmpty()) {
            return null;
        }
        try {
            // Generate a unique filename
            String filename = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
            Path filepath = Paths.get(uploadDir, filename);
            Files.createDirectories(filepath.getParent());
            Files.write(filepath, image.getBytes());
            return filepath.toString();
        } catch (IOException e) {
            log.error("Failed to save image", e);
            return null;
        }
    } 
    @Override
    public Collection<Movie> list(int limit) {
        log.info("Fetchiing all Movies");        // TODO Auto-generated method stub
        return movieRepo.findAll(PageRequest.of(0, limit)).toList();
    }

    @Override
    public Movie searchByTitle(String title) {
        log.info("Fetching Movies by title: {}", title);
            return movieRepo.findByTitle(title);
        
    }

    @Override
    public Collection<Movie> searchByGenre(String genre) {
        log.info("Fetchiing genre ", genre);
        return movieRepo.findByGenre(genre);
    }

    @Override
    public Collection<Movie> listRecs(boolean recommend) {
        log.info("Fetchiing recs ", recommend);
        
        return movieRepo.findByRecommend(recommend);
    }

    @Override
    public Movie get(long id) {
        log.info("Fetching Movies by title", id);
        Movie movie = movieRepo.findById(id);
         if(movie != null) {
              return movie;
         }else{
            throw new RuntimeException("Movie not found");
         }
        

    }

    @Override
    public Movie update(Movie movie) {
        log.info("Updating Movie", movie.getTitle());
        return movieRepo.save(movie);
    }

    @Override
    public Movie updateRating(long id, double rating) {
       log.info("Updating Movie rating",rating);
       Movie movie = movieRepo.findById(id);
       if (movie != null) {
           movie.setRating(rating);
           return movieRepo.save(movie);
       } else {
           throw new RuntimeException("Movie not found");
       }
    }

    @Override
    public Movie updateThougts(long id, String thoughts) {
        log.info("Updating Movie thoughts",thoughts);
        Movie movie = movieRepo.findById(id);
        if (movie != null) {
            movie.setThoughts(thoughts);
            return movieRepo.save(movie);
        } else {
            throw new RuntimeException("Movie not found");
        }
    }

    @Override
    public Boolean delete(long id) {
        log.info("Deleting Movie",id);
        Movie movie = movieRepo.findById(id);
        if (movie != null) {
            movieRepo.delete(movie);
            return true;
        } else {
            throw new RuntimeException("Movie not found");
        }
    }

    // @Override
    // public Collection<Movie> createBulk(Collection<Movie> movies) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'createBulk'");
    // }

    // @Override
    // public Boolean deleteBulk(Collection<Long> ids) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'deleteBulk'");
    // }
  
    
}
