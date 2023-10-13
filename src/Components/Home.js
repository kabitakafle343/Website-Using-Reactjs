import React from 'react'

import Body from "./Body.js";

import Gallery from './Gallery.js';
import Ourdish from './Ourdish.js';
import Popularfood from './Popularfood.js';


import Order from './Order.js';
import Customersreview from "./Customersreview.js"
import Footer from './Footer.js';
// import { Login } from '@mui/icons-material';

const Home = () => {
  return (
   
   
  
   <div>
      <Body></Body>
        <Ourdish></Ourdish>
       <Popularfood></Popularfood>
       <Gallery></Gallery>
   

       <Order></Order>
    <Customersreview></Customersreview>



    <Footer></Footer> 

    </div> 
   
  )

}

export default Home
