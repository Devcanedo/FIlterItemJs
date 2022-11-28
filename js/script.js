// document.querySelector
// Quando for citar o class usar '.nomeclass'
// Quando fot citar a tag usar 'nomeinput'

const filterElement = document.querySelector('header input')

const getCard = documeny.querySelectorAll('.cards li')


filterElement.addEventListener('input', filterCards)

// filter function
function filterCards() {
 if(filterElement.textContent !== '') {
 for (let card of getCard) {

 let title = card.querySelector('h2')

 title = title.textContent.toLowerCase()

 let filterText = filterElement.value.toLowerCase()

 if(!title.includes(filterText)) {
   card.style.display = "none"
 } else {
   card.style.display = "block"
 }
 }
 } else {
  for (let card of getCard) {
    card.style.display = "block"
  }
 }
}