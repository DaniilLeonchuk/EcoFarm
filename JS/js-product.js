const btns = document.querySelectorAll('.btn');
const modalOverlays = document.querySelectorAll('.modal-overlay');
const modals = document.querySelectorAll('.modal');


btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const path = btn.getAttribute('data-path');
    const modal = document.querySelector(`[data-target="${path}"]`);
    const modalOverlay = modal.parentElement;

    modals.forEach((m) => {
      m.classList.remove('modal--visible');
    });

    modal.classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlays.forEach((modalOverlay) => {
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((modal) => {
        modal.classList.remove('modal--visible');
      });
    }
  });
});




// Калькулятор расчёта стоимости



const squareInputs = document.querySelectorAll('.weight');
const calculateButtons = document.querySelectorAll('#calculate_price');
const totalPriceSpans = document.querySelectorAll('#total_price');
const pricesPerKg = document.querySelectorAll('.price');


calculateButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    
    const userInput = parseFloat(squareInputs[index].value);
    

    const pricePerKgText = pricesPerKg[index].textContent;
    const pricePerKgValue = parseFloat(pricePerKgText.split(':')[1].trim()); 
    
  
    if (!isNaN(userInput) && userInput >= 0) {
      
      const totalPrice = userInput * pricePerKgValue;
      
     
      totalPriceSpans[index].textContent = totalPrice.toFixed(2); 
    } else {
    
      alert('Пожалуйста, введите корректное число в поле.');
    }
  });
});





function Zoom(image) {
  if (image.classList.contains("zoomed")) {
    image.style.transform = "scale(1)";
    image.classList.remove("zoomed");
    
  } else {
    image.style.transform = "scale(1.15)";
    image.classList.add("zoomed");
  }
}



