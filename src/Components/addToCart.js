
function addToCart() {
    // Logic to add item to the cart
  
    // Create small box element
    const box = document.createElement('div');
    box.className = 'box';
  
    // Render payment apps
    const esewaLink = document.createElement('a');
    esewaLink.href = 'https://example.com/esewa-account'; // Replace with the actual Esewa account URL
    const esewaLogo = document.createElement('img');
    esewaLogo.src = 'https://example.com/esewa-logo.png'; // Replace with the actual Esewa logo image URL
    esewaLink.appendChild(esewaLogo);
  
    const phonepayLink = document.createElement('a');
    phonepayLink.href = 'https://example.com/phonepay-account'; // Replace with the actual PhonePay account URL
    const phonepayLogo = document.createElement('img');
    phonepayLogo.src = 'https://example.com/phonepay-logo.png'; // Replace with the actual PhonePay logo image URL
    phonepayLink.appendChild(phonepayLogo);
  
    box.appendChild(esewaLink);
    box.appendChild(phonepayLink);
  
    // Append the box to the desired location in the DOM
    const paymentAppsContainer = document.getElementById('paymentAppsContainer');
    paymentAppsContainer.innerHTML = '';
    paymentAppsContainer.appendChild(box);
  }
  export default addToCart;