import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Restreview({review}) {
  return (
    <div>
    <Accordion className='mt-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <p className='mt-3'>{review.name} <span className='ms-5 text-white'>Rating : {review.rating}</span>   <span style={{marginLeft:'600px'}} className=' text-secondary'>{review.date}</span></p>
        </Accordion.Header>
        <Accordion.Body>
          {/* <Accordion.Subtitle>{review.date}</Accordion.Subtitle>  */}
          <h5>Rating : {review.rating}</h5>
          {review.comments}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Restreview