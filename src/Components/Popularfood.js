// import React from 'react'
import p from "./image/Gpizza.jpg";
import k from "./image/Gp.jpeg";
import b from "./image/bugger.jpg";
import t from "./image/lattecofee.jpg";
import c from "./image/Groti.jpg";

import m from "./image/m.jpg";

const Popularfood = () => {


      
    
     
  
  return (
  
    <div >
    
      <h1 id="headerr">Most Popular Dishes</h1>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
      <div class="row " id="bbox">

<div class="col boxx" >
<div class="price"></div>
<img src={p} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Tasty pizza</h2>
<a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >ClickHere</button></a>
</div>
 <div class="col  boxx">
 <div class="price"></div>
 <img src={b} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Tasty burgers</h2>
    <a href="/bugger">  <button type="button" class="btn btn-warning btn-lg"  >ClickHere</button></a>
</div>

<div class="col boxx">
<div class="price"></div>
<img src={k} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Tasty Cake</h2>
    <a href="/cake">    <button type="button" class="btn btn-warning btn-lg" >ClickHere</button></a>
</div>

<div class="col boxx">
<div class="price"></div>
<img src={m} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Momos</h2>
    <a href="/momo"><button type="button" class="btn btn-warning btn-lg">ClickHere</button></a>
</div>

<div class="col boxx">
<div class="price"></div>
<img src={c} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>Roti Tarkari</h2>
    <a href="/roti">   <button type="button" class="btn btn-warning btn-lg">ClickHere</button></a>
</div>
 <div class="col boxx">
 <div class="price"></div>
 <img src={t} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
    <h2>cofee & others items</h2>
    
    <a href="/tea">    <button type="button" class="btn btn-warning btn-lg">ClickHere</button></a>
</div>
  </div>
 
    </div>
   
   
  )
}

export default Popularfood;
