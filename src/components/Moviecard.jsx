import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Moviecard = ({movie,edit}) => {
    
    return (
        <div className="movieapp">
            
            <Card style={{ hight: '10rem' , width: '15rem' }}>
            <Card.Img height='400px' variant="top" src={movie.poster} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>

            

            <Card.Title> <Rating rating={movie.rating}/> </Card.Title>
            
            </Card.Body>

            

            <Link to={`/Details/${movie.id}`}> <Button variant="primary">details</Button> </Link>

            
            </Card>

            

        </div>
    )
}

export default Moviecard
