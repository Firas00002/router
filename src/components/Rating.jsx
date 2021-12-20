import React from 'react'

const Rating = ({rating,handleRating}) => {

    function  ratingstars(x) {
        const stars =[]
        for (let i = 0; i < 5; i++) {
            if ( i < x){
                stars.push(<span onClick={()=>handleRating(i+1)} style={{ color: 'gold', fontSize:'30px', cursor:'pointer' }} >★</span>)
            } else {
                stars.push(<span onClick={()=>handleRating(i+1)} style={{ color: 'black', fontSize:'30px', cursor:'pointer' }} >★</span>)
            }
            
        }
        return stars; 
    }

    return (
        <div>
            {ratingstars(rating)}
            
        </div>
    )
}

Rating.defaultProps = {
    handleRating : ()=>{}
}

export default Rating;

