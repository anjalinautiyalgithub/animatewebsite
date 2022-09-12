import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


const Cards=(props)=>{


    return(
      <>
<div className="cards">
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.imgsrc} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>   
       </>


    )
}

export default Cards;