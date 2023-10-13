import React from 'react'
import waiter from "./image/waiter.png";
import "../Components/Order.css";
const Order = () => {
  return (
    <div class="gridform">

<div>
    <h1 style={{marginLeft:540,marginTop:50}}>LogIn</h1>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
      <div class="grid mt-5">
        <div><img src={waiter} class="img-fluid"  style={{height:500,width:600}}></img></div>


        <div>
        <form >
       
        <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"></input> 
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"></input> 
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input> 
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <label for="exampleInputEmail1" class="form-label">Number</label>
    <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="number"></input> 
 

  <div class="col-12">
  <button class="btn btn-primary" type="submit">create</button>
    <a href="signup.js"> <button class="btn btn-primary">signup</button></a>
    <button class="btn btn-primary" type="submit">Logout</button>
  </div>
</form>
</div>

      </div>
    </div>
    </div>
  )
}

export default Order

