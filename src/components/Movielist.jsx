import React from 'react'
import Moviecard from './Moviecard'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



const Movielist = ({film}) => {

    return (
        <div>
            <Link to={'/Addmovie'}> <Button variant="dark">Add New Movie</Button> </Link>
                <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around"}}>
                {film.map((el,i)=>
                <Moviecard key={i}  movie={el}/> 
                )}
                </div>
        </div>
    )
}

export default Movielist
