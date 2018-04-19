window.onload = function initiPage() {//aguardando página ser carregada
//função que muda o nome
  let mudar = window.setInterval(troca, 1000);
  function troca() {
    document.querySelector('.banner span').innerHTML = 'André!';
  }
  window.setTimeout(function() {
    clearInterval(mudar);
}, 2000);

  //funcção pra animar dropdown-icon
    let span = document.querySelector('#dropdown-icon span');
    document.getElementById('dropdown-icon').addEventListener('click', function () {
      if (span.className != 'ativo') {
        span.className = 'ativo';
        //linha pra exibir o menu dropdown
        document.getElementById('menu').style.height = 100+'vh';
      }else {
        span.className = '';
        document.getElementById('menu').style.height = 0;
      }
    });

}
