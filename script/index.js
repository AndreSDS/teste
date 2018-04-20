window.onload = function initiPage() {//aguardando página ser carregada

  //colocando elementos em variaveis
    const botao = document.getElementById('dropdown-icon');
    const span = document.querySelector('#dropdown-icon span');
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');

    //animando botão dropdown e menu dropdown
    botao.addEventListener('click', function () {
      if (span.className != 'humburger-icon ativo') {
        span.classList.add('ativo');
        menu.classList.add('dropdown');
      }else{
        span.classList.remove('ativo');
        menu.classList.remove('dropdown');
      }
  });

  //fechar dropdown ao clicar em uma opção
  let nav_li = document.querySelectorAll('#menu ul li');
  for (var i = 0; i < nav_li.length; i++) {
   nav_li[i].addEventListener('click', function () {
     if (menu.className == 'dropdown') {
       menu.classList.remove('dropdown');
       span.classList.remove('ativo');
     }else{
       menu.classList.add('sumiu');
     }
   })
  }

  //rolagem suave ao clicar em um li da nav menu


  //descobrindo se está rolando para baixo ou para cima -https://eduardopereira.pt/2010/05/detectar-direccao-de-scroll-com-javascript-jquery/
  let desceu = 0;
  let subiu = window.scrollY;
  window.onscroll = function () {
    desceu = window.scrollY;
      if (subiu < desceu && subiu >= 70) {
        //se rolar pra baixo a navbar some
        navbar.classList.add('sumiu');
        subiu = window.scrollY;
      }else {
        //se rolar pra cima navbar aparece
        navbar.classList.remove('sumiu');
        subiu = window.scrollY;
      }
  }

}//Função carregamento página
