import React from 'react'
import blackcoffee from "./image/blackcoffee.jpg";
import lattecoffee from "./image/lattecofee.jpg";
import colddrink from "./image/ncolddrink.jpg";
import Gcha from "./image/Gchatpat.jpg";
import Gcake from "./image/Gcreame.jpeg";
import Gp from "./image/Gcake.jpg";
import '../Components/Tea.css';
function Tea() {
  return (
    <div className='Tea'>
      <div class="col boxx" >

<img src={blackcoffee} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>blackcoffee</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
</div>
   <div class="col boxx" >

<img src={lattecoffee} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>lattecoffee</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
</div>
   <div class="col boxx" >

<img src={colddrink } alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>colddrink</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
</div>

<div class="col boxx" >

<img src={Gcha } alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>chickenchatpat</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
</div>

<div class="col boxx" >
<img src={Gcake} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>donuts</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
</div>

<div class="col boxx" >
<img src={Gp} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>cupcake</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
</div>
</div>

  )
}

export default Tea
