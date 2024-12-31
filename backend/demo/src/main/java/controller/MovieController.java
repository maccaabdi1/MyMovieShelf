package controller;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.RequiredArgsConstructor;
import model.Response;
import service.MovieService;



@RestController
@RequestMapping("/movies")
@RequiredArgsConstructor
public class MovieController {
    private final MovieService movieService;
    
    @GetMapping("/list")
    public ResponseEntity<Response> getMovies(){
        return ResponseEntity.ok(
            Response.builder()
            .timeStamp(LocalDate.now())
            .data(Map.of("movies",movieService.list(30)))
            .status(HttpStatus.OK)
            .status(HttpStatus.OK)
            .statusCode(HttpStatus.OK.value())
            .build()
            );
    }
    
    @PostMapping("/save")
    public ResponseEntity<Response> saveMovie(@RequestBody Movie movie){
        return ResponseEntity.ok(
            Response.builder()
            .timeStamp(LocalDate.now())
            .data(Map.of("movies",movieService.list(30)))
            .status(HttpStatus.OK)
            .status(HttpStatus.OK)
            .statusCode(HttpStatus.OK.value())
            .build()
            );
    }

    
}
