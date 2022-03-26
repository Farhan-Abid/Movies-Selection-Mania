import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const {movie, handleAddToCart} = props ;
    const {picture,price,name} = movie;
    
    return (
        <div className='movie border border-dark border-3 rounded-top rounded-2'>
            <img src={picture} alt="" />
            <h2 className='mt-3'> {name}</h2>
            <p>Price: {price}</p>
            <button onClick={ () => handleAddToCart(movie)} type="button" class="btn btn-danger">Danger</button>
        </div>
    );
};

export default Movie;