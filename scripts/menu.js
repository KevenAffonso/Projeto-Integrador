
var menuItem = document.querySelectorAll('.item_menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
)
this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)


//Expandir menu

var btnExp = document.querySelector('#btn_exp')
var menuSide = document.querySelector('.menu_lateral')

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir')
})




let timer;

document.addEventListener('input', e => {
  const el = e.target;
  
  if( el.matches('[data-color]') ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    }, 100)
  }
})



//Expandir Botões

var botao = document.querySelector('.botoes')
var menuSub = document.querySelector('.menu_sub')

botao.addEventListener('click', function () {
  menuSub.classList.toggle('expandir')
})