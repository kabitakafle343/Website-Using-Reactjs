import React from 'react'

import ccc from "./image/colddrinkssss.png";
import picon from "./image/pizzaicon.png";
import ccon from "./image/cakeicon.webp";
import tea from "./image/tea.png";
import '../Components/Ourdish.css';
import ice from "./image//coldiccream.png";
import imgg from "./image/cakephoto.jpg";

import bicon from "./image/bugericon.jpg";
import p from "./image/pizza.jpg";
import b from "./image/bugger.jpg";
import c from "./image/ncolddrink.jpg";
import t from "./image/ntea.jpg";

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
function Ourdish() {
  return (
   
    <div>
   
    
 <h1 id="headerr">Our Special Dishes</h1>

    


<div class="row" id="bbox">

<div class="col boxx" >
<div className="overlay">
<img src={p} className="slide img-fluid"></img>
</div>

<img src={picon} class="img-fluid" alt="..." id="icon"></img>
    <h2>Tasty pizza</h2>
    <p>Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered.</p>
</div>
 <div class="col  boxx" >
 <div className="overlay">
<img src={b} className="slide img-fluid"></img>
</div>
 <img src={bicon} class="img-fluid" alt="..."  id="icon"></img>
    <h2>Tasty burgers</h2>
    <p>Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered.</p>
</div>

<div class="col boxx">
<div className="overlay">
<img src={imgg} className="slide img-fluid"></img>
</div>
<img src={ccon} class="img-fluid" alt="..."  id="icon"></img>
    <h2>Tasty sweets</h2>
    <p>Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendereds.</p>
</div>

<div class="col boxx">
<div className="overlay">
<img src={imgg} className="slide img-fluid"></img>
</div>
<img src={ice}  class="img-fluid" alt="ice cream"  id="icon" ></img>
    <h2>Tasty cake</h2>
    <p>Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered.</p>
</div>

<div class="col boxx">
<div className="overlay">
<img src={c} className="slide img-fluid" style={{marginTop:0}}></img>
</div>
<img src={ccc}  class="img-fluid" alt="cold-drink icon"  id="icon"  ></img>
    <h2>cold Drink</h2>
    <p>Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered.</p>
</div>
 <div class="col boxx">
 <div className="overlay">
<img src={t} className="slide img-fluid"></img>
</div>
 <img src={tea} class="img-fluid" alt="..." id="icon"></img>
    <h2>Healthy Breakfast</h2>
    <p>Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered.</p>
</div>

</div>





</div>
 
   
 
 
  )
}

export default Ourdish;
