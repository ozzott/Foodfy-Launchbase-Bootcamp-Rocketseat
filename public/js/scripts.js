const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function() {
        const cardTitle = card.getElementsByTagName("h1")[0].textContent;
        const cardChef = card.getElementsByTagName("p")[0].textContent;
        const recipeId = card.getAttribute('id');
        modalOverlay.classList.add('active');

        modalOverlay.querySelector('h1').innerHTML = `${cardTitle }`
        modalOverlay.querySelector('p').innerHTML = `${cardChef }`
        modalOverlay.querySelector("img").src = `public/assets/${recipeId}.png`;
       
        
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){ 
    modalOverlay.classList.remove('active')
})
