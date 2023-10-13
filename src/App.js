
import Home from './Components/Home.js';
import Gallery from './Components/Gallery.js';
import Ourdish from "./Components/Ourdish.js";
import Popularfood from './Components/Popularfood.js';
// import Workmethod from './Components/Workmethod.js';
// import Footer from "./Components/Footer.js"
import Order from './Components/Order.js';

// import Customersreview from './Components/Customersreview.js'; 

import Pizzafile from './Components/Pizzafile';
import Bugger from './Components/Bugger.js';
import Cake from './Components/Cake.js';
import Momo from './Components/Momo.js';
import Roti from './Components/Roti.js';
import Tea from './Components/Tea.js';
import Header from './Components/Header.js';




import React from 'react'
















function App() {

  let Component
  switch (window.location.pathname) {
case "/home":
  Component=<Home/>
  break

  case "/speciality":
      Component=<Ourdish/>
     break

      case "/popular":
       Component=<Popularfood/>
       break

      case "/gallery":
       Component=<Gallery/>
     break

     case "/order":
      Component=<Order/>
    break



      case "/pizza":
        Component=<Pizzafile/>
      break

      case "/bugger":
        Component=<Bugger/>
      break

      case "/cake":
        Component=<Cake/>
      break

      case "/momo":
        Component=<Momo/>
      break

      case "/roti":
        Component=<Roti/>
      break


      case "/tea":
        Component=<Tea/>
      break


default :
        Component=<Home/>
      break

  
   
}
  return (
   
    <div className="App">



    
      <header className="App-header">
      
  


  
      <Header></Header>     
{Component}




       </header>
     
   


     </div> 
 
  )}
    

  

export default App;
