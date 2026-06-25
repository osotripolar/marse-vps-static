const wspButton = document.getElementById('wspButton')
const cardContainer = document.querySelector('.card__container')

// ============ LISTENERS ============

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
