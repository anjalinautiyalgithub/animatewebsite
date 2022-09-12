import React from 'react';
import  {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navigation from './Navigation';

const App=()=>{
    return(
    <>

    <Navigation/>

    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/about' element={<About/>}/>      
       <Route path='/contact' element={<Contact/>}/>
      

    </Routes>
    
    
    </>


    )
}

export default App;