window.onload = function initiPage() {//aguardando página ser carregada

  let div = document.querySelector('header > div');

  let span = document.querySelector('header > div > span');

  let nav = document.getElementsByTagName('nav');
  for (var i = 0; i < nav.length; i++) {
    nav = nav[i];
  }

  div.addEventListener('click', function () {
    if (span.className != 'ativo') {
      span.className = 'ativo';
      nav.style.height = 100+'vh';
      nav.style.opacity = 1;
    }else{
      span.className = '';
      nav.style.height = 0;
      nav.style.opacity = 0;
    }
  });




    }
