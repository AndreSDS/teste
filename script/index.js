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

  //função pra fazer a barra de navegação sumir ao rolar pra baixo

}
