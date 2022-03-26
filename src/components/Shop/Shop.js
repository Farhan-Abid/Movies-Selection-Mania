import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Shop.css';

const Shop = () => {
    const [movies,setMovies] = useState([]);
    const [cart,setCart] = useState([]);

    console.log(cart);
    
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
    const chooseButton = (cartItems) =>{
        const randomNum = Math.floor(Math.random() * 4);
        if(cartItems[randomNum]){
            alert(cartItems[randomNum].name);
        }
        

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
                <Cart></Cart>
            {
                    cart.map((item) =>(
                        <h1>{item.name}</h1>
                    ) )
                }
                <button onClick={() => chooseButton(cart)} type="button" class="btn btn-outline-danger">Choose One for me</button>
                <br />
                <button type="button" class="btn btn-outline-warning">Choose Again</button>

                {/* <Cart cart={cart}></Cart> */}
            </div>
        </div>
        
    );
};

export default Shop;