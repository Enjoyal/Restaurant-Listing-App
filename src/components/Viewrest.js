import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';




function Viewrest() {
  const [open, setOpen] = useState(false);


    const urlParams=useParams()
    console.log(urlParams.id);

    const[restaurantlist, setRestaurantlist]=useState([])
//to create a function for API call
    const getRestaurant=async()=>{
        //async await
       await fetch('/restaurants.json')  //async call
       .then((data)=>data.json()
       .then((result)=>setRestaurantlist(result.restaurants))
       )
    }
    console.log(restaurantlist);

    useEffect(()=>{
        getRestaurant();
    },[])

    let viewrest=restaurantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest, 'viewrest#');

  return (
    <div>{
        viewrest?(
        <Row className='mb-5'>
            <Col md={3}>
            <Image src={viewrest.photograph} className="ms-5 mt-4 rounded" style={{width:'300px', height:'400px'}} fluid />
            </Col>
            <Col md={8}>
            <h3 className='mt-5'>{viewrest.name}</h3>
    <ListGroup className=' mt-3'>
      <ListGroup.Item variant='dark'>Id : {viewrest.id}</ListGroup.Item>
      <ListGroup.Item variant="dark">Address : {viewrest.address}</ListGroup.Item>
      <ListGroup.Item variant="dark">Neighborhood : {viewrest.neighborhood}</ListGroup.Item>
      <ListGroup.Item variant="dark">Cuisine type : {viewrest.cuisine_type}</ListGroup.Item>
       {/* <ListGroup.Item variant="dark">Operating Hours :</ListGroup.Item>
      <ListGroup.Item variant="dark">Reviews : </ListGroup.Item>
      <ListGroup.Item variant="dark">Info</ListGroup.Item>
      <ListGroup.Item variant="dark">Light</ListGroup.Item>
      <ListGroup.Item variant="dark">Dark</ListGroup.Item>  */}
    </ListGroup>
    <><Restop op={viewrest.operating_hours}/></>

    <>  <Button variant='dark' className='mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}>
        Reviews
      </Button>

      <Fade in={open}>
        <div id="example-fade-text">
        {
        viewrest.reviews.map(item=>(
        <Restreview review={item}/>
        ))
      }
        </div>
      </Fade>

      
    </>
    </Col>
            
        </Row>
        ):'null'
        }
    </div>
  )

        
}

export default Viewrest