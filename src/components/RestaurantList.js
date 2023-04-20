import React, { useEffect, useState } from 'react'
import Restcard from '../Restcard';
import Row from 'react-bootstrap/Row';

function RestaurantList() {
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
   
  return (
    <Row className='mt-5 mb-5' style={{marginLeft:'50px'}}>
    {
          restaurantlist.map(item=>(
          <Restcard restaurant={item}/>
          // <h5>{item.name}</h5>
          ))

    }
    </Row>
  )
}

export default RestaurantList