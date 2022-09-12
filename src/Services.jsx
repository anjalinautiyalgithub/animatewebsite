import React from 'react';
import Cards from './Cards';
import Sdata  from './Sdata';

const Services=()=>{


    return(
      <>
        <div style={{display: 'flex',flexWrap:'wrap', flexDirection: 'row',justifyContent: 'space-between',padding:'2.5rem'}}> 
     {Sdata.map((elem,index)=>{
          return <Cards
          key={index}
           imgsrc={elem.Images}
           title={elem.Title}
          /> 
     })}
     
   </div>
      </>


    )
}

export default Services;