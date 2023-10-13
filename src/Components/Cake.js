import React from 'react'
import Chocolatecake from "./image/chocolatecake.jpeg";
import vanillacake from "./image/vanillacake.jpg";
import "../Components/Cake.css"
const Cake = () => {
  return (
    <div className='cake'>
    <div className='boxx'>
      <img src={Chocolatecake} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Chocolatecake</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg">AddtoCart</button></a>
    </div>
    <div className='boxx'>
      <img src={vanillacake} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Vanillacake</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg">AddtoCart</button></a>
    </div>
    <div className='boxx'>
      <img src={Chocolatecake} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Chocolatecake</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg">AddtoCart</button></a>
    </div>
    </div>
  )
}

export default Cake
