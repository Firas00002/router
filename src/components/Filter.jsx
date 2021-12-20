import React from 'react'
import Rating from './Rating'



export const Filter = ({text,handletext,rating,handleRating}) => {
    return (
        <div>
            
            <h1>Movie App</h1>
            <div>
            <input type="text" placeholder="Search a Movie" value={text} onChange={handletext} />
            <Rating rating={rating} handleRating={handleRating}/>


            </div>
            
        </div>
    )
}
