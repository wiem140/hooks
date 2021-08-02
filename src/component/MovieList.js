import React from 'react';
import { MovieCard } from './MovieCard';

export const MovieList = ({movies, searchTitle, searchRating}) => {
    console.log(movies);
        return (
            <div style={{display: "flex", alignContent: "center", justifyContent: "space-around" }}>
                {movies      
                 
                /* .filter((movie) => 
            movie.name.toLowerCase().trim().includes(searchTitle.toLowerCase().trim())&&
            movie.rating >= searchRating
            )*/
           
                    .map((movie)=>(
                 <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>
        );
    }
    
