window.onload = function initiPage() {//aguardando página ser carregada

  //funcção pra animar dropdown-icon
    let span = document.querySelector('#dropdown-icon span');
    document.getElementById('dropdown-icon').addEventListener('click', function () {
      if (span.className != 'ativo') {
        span.className = 'ativo';
        //linha pra exibir o menu dropdown
        document.getElementById('menu').style.height = 60+'vh';
      }else {
        span.className = '';
        document.getElementById('menu').style.height = 0;
      }
    });

  //descobrindo se está rolando para baixo ou para cima -https://eduardopereira.pt/2010/05/detectar-direccao-de-scroll-com-javascript-jquery/
  let subiu = 0;
  let desceu = 0;

  subiu = window.scrollY;
  window.onscroll = function () {
    desceu = window.scrollY;
      if (subiu > desceu) {
        document.getElementById('navbar').classList.remove('sumiu');
        subiu = window.scrollY;
      }else {
        document.getElementById('navbar').classList.add('sumiu');
        subiu = window.scrollY;
      }
  }
}
