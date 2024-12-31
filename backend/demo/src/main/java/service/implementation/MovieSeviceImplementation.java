package service.implementation;

import java.io.IOException;
import java.util.Collection;
import java.util.Optional;

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
    
    @Override
    public Movie create(Movie movie,MultipartFile image) {
        // TODO Auto-generated method stub
        log.info("Saving new Movie :)", movie.getTitle());
        String imageURL = saveImage(image);
        movie.setImageUrl(imageURL);
                return movieRepo.save(movie);
        }
        
    public String saveImage(MultipartFile image) throws IOException {

            return null;
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
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public Movie updateRating(long id, double rating) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateRating'");
    }

    @Override
    public Movie updateThougts(long id, String thoughts) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateThougts'");
    }

    @Override
    public Boolean delete(long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public Collection<Movie> createBulk(Collection<Movie> movies) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createBulk'");
    }

    @Override
    public Boolean deleteBulk(Collection<Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteBulk'");
    }
  
    
}
