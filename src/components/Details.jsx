import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Details = (props) => {

    const detailss = props.detail.find((el) => el.id == props.match.params.id)




    return (
        <div>
            <Link style={{}} to='/'><Button variant="primary">Home</Button>  </Link>

            <div style={{ flexWrap:"wrap", justifyContent:"space-around"}} >
            <h1>{detailss.title}</h1>
            
            <h4 style={{color: 'black'}}>{detailss.desc}</h4>

            <iframe width="560" height="315" src={detailss.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            
        </div>
    )
}

export default Details
