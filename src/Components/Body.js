
import React from 'react';
import '../Components/Body.css';
import piz from "./image/bugger.jpg";



function Body() {
  return (
   
    <div>
  <div class="container">
 
    <div class="title">
    <h1>Food Made With LOve</h1>
    <p> Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some  styles for a simpler baseline and later provide .table, .table-bordered, and more.</p>
    <button type="button" class="btn btn-warning btn-lg">order now</button>
    </div>
    
    <div class="image"><img src={piz} class="img-fluid" alt="..."></img></div>
  </div>
</div>
    
  )
}

export default Body

