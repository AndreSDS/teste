document.addEventListener("DOMContentLoaded", function(event) {

const nav = document.querySelector('header');
const distanciaTop = nav.offsetTop;
let navHeight = nav.offsetHeight;

window.addEventListener('scroll', function () {
  const windowTop = window.pageYOffset;
  if (windowTop >= distanciaTop) {
    nav.classList.add('fixed');
  }else{
    nav.classList.remove('fixed');
  }
});

 //botão toggle menu
 let botao = document.querySelector('.hamburger');
  botao.addEventListener('click',function(){

    if(botao.className != 'hamburger hamburger--slider is-active'){
      botao.classList.add('is-active');
    }else{
      botao.classList.remove('is-active');
    }
  });

//função pra escrever na tela https://www.youtube.com/watch?v=zx2axQoY_YM
const titulo = document.querySelector('.chamada h1');
function typeWriter(el) {
  let textoarray = el.innerHTML.split('');
  el.innerHTML = '';
  textoarray.forEach((letra, i) => {
    setTimeout(() =>  el.innerHTML += letra , 75 * i);
  });
}
typeWriter(titulo);
/*
  //função pra escrever o nome na tela
  let str = document.querySelector('.chamada span').innerHTML = '';
  let el = document.querySelector('.chamada span');
  let arr = ["Goku!","Ops!","André!"];
  let next = '';
  let char = str;

  if (str == '') {
    char = arr[0].split('').reverse();
  }
    let typer = setInterval(function() {
      next = char.pop();
      el.innerHTML += next;
      str = el.innerHTML;
      if (str == "Goku!") {
        el.innerHTML = ' ';
        char = arr[1].split('').reverse();
      }
        if (str == ' Ops!') {
          el.innerHTML = ' ';
            char = arr[2].split('').reverse();
        }
        if (!char.length) return clearInterval(typer);
    }, 195);
*/

//scroll suave para determinado elemento
//https://css-tricks.com/snippets/jquery/smooth-scrolling/
let menuItem = document.getElementsByTagName('li');
for (var i = 0; i < menuItem.length; i++) {
  let item = menuItem[i];
  item.addEventListener('click', function(){
    switch (item.className) {
    case 'home':
      document.getElementById('inicio').scrollIntoView({
        behavior: 'smooth'
        });
        break;
    case 'sobre':
      document.getElementById('sobre').scrollIntoView({
        behavior: 'smooth'
        });
        break;
    case 'social':
      document.getElementById('social').scrollIntoView({
        behavior: 'smooth'
        });
        break;
    case 'portfolio':
      document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth'
        });
        break;
      }//fim do switch
});//fim do eevento clique
}//for nos li pra achar a seção correta do scroll

//move suavemente para o header
document.getElementById('banner').addEventListener('click', function(){
  document.querySelector('header').scrollIntoView({
  behavior: 'smooth'
  });
});




});//fim função aguarda carregamento da página
