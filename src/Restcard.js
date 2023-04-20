import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';


function Restcard({restaurant}) {
  return (
    <Col sm={12} md={6} lg={2} xl={3}>
    <Link className='text-decoration-none' to={`viewrest/${restaurant.id}`}>

    <Card style={{ width: '300px', height:'500px'}} className="mt-5">
      <Card.Img className='p-3 h-75 rounded' variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title >{restaurant.name}</Card.Title>
        <Card.Text className='text-secondary'>
         {restaurant.neighborhood}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Link>
    </Col>
  )
}

export default Restcard