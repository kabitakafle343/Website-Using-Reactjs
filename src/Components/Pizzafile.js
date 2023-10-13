import React ,{useState}from 'react'
import chickenpizza from "./image/chickenpizza.jpg";
import cheesepizza from "./image/cheesepizza.jpg";
import vegpizza from "./image/vegpizza.jpg"
import '../Components/Pizzafile.css';

// const Pizzafile = () => {
//   return (
//     <div className='pizza'>
//    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
    

//       <div class="col boxx" >

// <img src={chickenpizza} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>chickenpizza</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>

// <div class="col boxx" >

// <img src={cheesepizza} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>cheesepizza</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>
//   <div class="col boxx" >

// <img src={vegpizza} alt="cake" class="img-fluid" style={{height:300,width:600}}></img>
//     <h2>vegpizza</h2>
// <a href="/pizza"> <button type="button" class="btn btn-warning btn-lg"  >AddtoCart</button></a>
// </div>
//     </div> 
//   )
// }

// export default Pizzafile














const Pizzafile = () => {
  const [items, setItems] = useState([
    { id: 1, name: "chickenpizza", isAdded: false , image:chickenpizza},
    { id: 2, name: "cheesepizza", isAdded: false ,image:cheesepizza},
    { id: 3, name: "vegpizza", isAdded: false,image:vegpizza }
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

export default Pizzafile;







