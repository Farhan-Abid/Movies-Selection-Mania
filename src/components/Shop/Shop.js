import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './Shop.css';

const Shop = () => {
    const [movies,setMovies] = useState([]);
    useEffect( () => {
        fetch('data.json')
  .then(response => response.json())
  .then(data => setMovies(data))

    },[]);

    const handleAddToCart = movie => {
        console.log(movie);
      };
    return (
        <div className='shop-container'>
            <div className="movies-container">
                {
                    movies.map(movie => <Movie key={movie.id}
                    movie={movie} handleAddToCart={handleAddToCart}>

                    </Movie>)
                }

            </div>
            <div className="cart-container">
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;