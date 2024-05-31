
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const shuffleButton = document.getElementById('shuffle');


function shuffleCards() {
 
  const cardsArray = [card1, card2, card3];
  
 
  for (let i = 0; i < cardsArray.length; i++) {
    let j = Math.floor(Math.random() * (cardsArray.length - i)) + i;
    [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
  }
  
 
  cardsArray.forEach(card => {
    card.parentNode.appendChild(card);
  });
}

shuffleButton.addEventListener('click', shuffleCards);
