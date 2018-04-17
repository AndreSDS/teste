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
      nav.style.top = 70+'px';
      nav.style.visibility = 'visible';
    }else{
      span.className = '';
      nav.style.top =  -175+'vw';
    }
  });




    }
