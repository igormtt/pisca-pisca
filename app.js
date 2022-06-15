function getRandomColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  function aClick() {

    var nomeCor = document.body.style.background = getRandomColor();

    var titulu1 = document.getElementById('htitulo')
    titulu1.innerText = `A cor do site em hexadecimal é: ${nomeCor}`
  }

  function aCor() {

    var titulu1 = document.getElementById('htitulo')

    titulu1.innerText = "Clique abaixo para mudar a cor!"


  }