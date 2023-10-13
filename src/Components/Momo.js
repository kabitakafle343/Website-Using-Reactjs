import React ,{useState}from 'react'
import frymomo from "./image/frymomo.jpg";
import chickenmomo from "./image/chickenmomo.jpg";
import vegmomo from "./image/vegmomo.jpg";
import '../Components/Momo.css';
// const Momo = () => {
//   return (
//     <div className='momo'>
//            <div class="col boxx" >

// <img src={chickenmomo} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>chickenmomo</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>


// <div class="col boxx" >

// <img src={vegmomo} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>vegmomo</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>

// <div class="col boxx" >

// <img src={frymomo} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>frymomo</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>
//     </div>
//   )
// }

// export default Momo;



















const Momo = () => {
  const [items, setItems] = useState([
    { id: 1, name: "chickenmomo", isAdded: false , image: chickenmomo },
    { id: 2, name: "vegmomo", isAdded: false ,image:vegmomo},
    { id: 3, name: "frymomo", isAdded: false,image:frymomo }
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

export default Momo;