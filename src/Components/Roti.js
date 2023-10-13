import React ,{useEffect,useState} from 'react'
import Muttonbiryani from "./image/Gmutton.jpeg"
import Groti from "./image/Groti.jpg"
import cheeseroll from "./image/cheesehotdogroll.jpg";
import '../Components/Roti.css';

import addToCart from '../Components/addToCart';
// const Roti = () => {
//   return (
//     <div className='roti'>
//       <div class="col boxx" >

// <img src={Muttonbiryani} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>MuttonBiryani</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  onClick={addToCart}>AddtoCart</button></a>
// </div>

// <div class="col boxx" >

// <img src={Groti} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>PanerRoti</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>
//      <div class="col boxx" >

// <img src={cheeseroll} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>Tasty pizza</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>
//     </div>
//   )
// }

// export default Roti

const Roti = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Mutton Biryani", isAdded: false , image: Muttonbiryani},
    { id: 2, name: "PanerRoti", isAdded: false ,image:Groti},
    { id: 3, name: "Tasty Pizza", isAdded: false,image:cheeseroll }
  ]);

  const addToCart = (itemId) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, isAdded: true };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const removeFromCart = (itemId) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, isAdded: false };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className='roti'>
      {items.map(item => (
        <div key={item.id} className="col boxx">
          <h1>Rs.100</h1>
          <img src={item.image} alt="cake" className="img-fluid" style={{ height: 300, width: 600 }}></img>
          <h2>{item.name}</h2>
          {item.isAdded ? (
            <div>
              <button type="button" className="btn btn-warning btn-lg">
                Added &#x1F44D;
              </button>
              <button type="button" className="btn btn-danger btn-lg" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ) : (
            <button type="button" className="btn btn-warning btn-lg" onClick={() => addToCart(item.id)}>
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Roti;