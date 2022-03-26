import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Shop.css';

const Shop = () => {
    const [movies,setMovies] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect( () => {
        fetch('data.json')
  .then(response => response.json())
  .then(data => setMovies(data))

    },[]);

    const handleAddToCart = movie => {
        console.log(movie);
        const newCart = [...cart,movie];
        setCart(newCart);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;