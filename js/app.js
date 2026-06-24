
const wspButton = document.getElementById('wspButton')
// form
const btnSendForm = document.getElementById('btnSendForm')
const inputName = document.querySelector('form #name')
const inputContact = document.querySelector('form #contact')
const inputMessage = document.querySelector('form #message')

//cards
const cardContainer = document.querySelector('.card__container')

// ============ LISTENERS ============

// para desactivar el form
document.addEventListener('submit',(e)=>{
  e.preventDefault()
})

// btnContactoWsp
wspButton.addEventListener('click',(e)=>{
  window.location.href = 'https://wa.link/dq6tgg'
})

// redireccionamiento a products
cardContainer.addEventListener('click',(e)=>{
  const card = e.target.closest('.card')
  if(!card) return
  window.location.href = '/products.html'
})

//form
btnSendForm.addEventListener('click',procearForm)

function procearForm(){
  const name = inputName.value
  const contact = inputContact.value
  const message = inputMessage.value

  if (!name || !contact || !message) return console.log('le falta llenar algún campo')

}