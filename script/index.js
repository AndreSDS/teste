window.onload = function() {//aguardando página ser carregada

  //colocando elementos em variaveis
    const botao = document.getElementById('dropdown-icon');
    const span = document.querySelector('#dropdown-icon span');
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    const li = document.querySelectorAll("#menu li a");
    const skills = document.getElementById('habilidades');
    const header_height = document.getElementById('navbar').offsetHeight;

    let links = document.links;
    console.log(links);
    let html = document.documentElement;
    console.log(html);
    let body = document.body;
    console.log(body);

    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function () {

        //fecha o dropdown ao cliclar em um item do menu
        if (menu.className == 'dropdown') {
          menu.classList.remove('dropdown');
          span.classList.remove('ativo');
        }

        let scrollTop = Math.round(body.scrollTop || html.scrollTop);
        if (this.hash != '') {
          event.preventDefault();
          let hashEl = document.getElementById(this.hash.substring(1));
          let hashTop = 0;
          let obj =hashEl;
          while (obj.offsetParent) {
            hashTop += obj.offsetTop;
            obj = obj.offsetParent;
          }
          hashTop = Math.round(hashTop);
          scroll(scrollTop,hashEl,this.hash);
        };
      };
    };

function scroll(from,to,hash) {
   let timeInterval = 10;
   let prevScroll;
   let incremento = (to > from) ? 10 : -10;
   let scrollPixel = setInterval(function(){
     let scrollTop = Math.round(body.scrollTop || html.scrollTop);

     if (prevScroll == scrollTop || (to >from && scrollTop>=to)||(to<from && scrollTop<=to)) {
       clearInterval(scrollPixel);
       window.location.hash = hash;
     }else{
       body.scrollTop += incremento;
       html.scrollTop += incremento;

       prevScroll = scrollTop;
     }
   },timeInterval);
};

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

  //descobrindo se está rolando para baixo ou para cima -https://eduardopereira.pt/2010/05/detectar-direccao-de-scroll-com-javascript-jquery/
  let desceu = 0;
  let subiu = window.pageYOffset;
  window.onscroll = function () {
    desceu = window.pageYOffset;
      if (subiu < desceu && subiu > header_height) {
        //se rolar pra baixo a navbar some
        navbar.classList.add('sumiu');
        subiu = window.pageYOffset;
      }else{
        //se rolar pra cima navbar aparece
        navbar.classList.remove('sumiu');
        subiu = window.pageYOffset;
      }
  }

 };//Função carregamento página
