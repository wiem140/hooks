import React from 'react';
import { MovieCard } from './MovieCard';
import '../App.css';

export const MovieList = ({movies, searchTitle, searchRating}) => {
    console.log(movies);
        return (
            <div style={{display: "flex", alignContent: "center", justifyContent: "space-around" }}>
                {movies      
                 
         .filter((el) =>
            el.rating >= searchRating &&
            el.name.toLowerCase().includes(searchTitle.toLowerCase().trim())
            
            
            )
           
                    .map((el)=>(
                 <MovieCard movie={el} key={el.id}/>
                    ))}
            </div>
        );
    }
    
