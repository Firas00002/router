import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import Rating from './Rating';


const Addmovie = ({add}) => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [poster, setposter] = useState("")
  const [rating, setrating] = useState(1)
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRating = (x)=> setrating(x)

  const handlesubmit  = (e)=> {
      e.preventDefault();
      const newmovie = {
          id: Math.random(),
          title,
          desc,
          poster,
          rating
          
      }
      add(newmovie)
      handleClose()
  }

  
    

    return (
        <div>
            <Link to='/'> <Button variant="dark">Home</Button></Link>

            <form onSubmit={handlesubmit}>
            <Button variant="primary" onClick={handleShow}> Add new movie </Button>

                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title>Add new movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <input type="text" placeholder="Movie Title" value={title} onChange={(e)=>settitle(e.target.value)} />
                        <br />
                        <input type="text" placeholder="Movie Description" value={desc} onChange={(e)=>setdesc(e.target.value)} />
                        <br />
                        <input type="url" placeholder="Movie Poster" required value={poster} onChange={(e)=>setposter(e.target.value)} />
                        <br />
                        <Rating handleRating={handleRating} rating={rating} />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} > Close </Button>
                    <Button variant="primary" type="submit"   onClick={handlesubmit} > Save </Button>
                    </Modal.Footer>
                    </Modal>
            </form>
            
        </div>
    )
}

export default Addmovie
