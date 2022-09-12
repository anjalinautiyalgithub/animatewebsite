import React from 'react';
import {Button} from 'react-bootstrap';


const Home=()=>{
    return(
       <>
      <div className='container'>
        <div className='row'>
        <div className='main_box col-10 mx-auto'>
         <div className='content'> 
         <h2 className='main_heading'>Grow Your Bussiness with <strong>Anjali Technical</strong> </h2>
         <p className='para'>We are the team of Talented Developer Making Websites</p>
         {/* <button className='button'>Get Started</button> */}
         <Button variant="outline-info" className='btn'>Get started</Button>
         </div>
         </div>
         </div>
          <div>        
         <img src='/Images/bedlapi.jpg' alt="not load" className='image'/>
         </div>
        
         
        
     </div>
      </>


    )
}

export default Home;