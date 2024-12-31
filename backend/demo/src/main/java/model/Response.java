package model;

import java.time.LocalDate;
import java.util.Map;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;
import lombok.experimental.SuperBuilder;

/**
 * @author Macca Abdi 
 * @version 1.0
 * @since 12/30/24
 */
@Data
@SuperBuilder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {

    protected LocalDate timeStamp;
    protected int statusCode;
    protected HttpStatus status;
    protected String reson;
    protected String message;
    protected String developerMessage;
    protected Map<?,?> data;
    
}
