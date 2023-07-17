function carregar(){
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if(hora>=0 && hora<12){
    img.src = 'imagens/manha.jpeg';
    document.body.style.background='#ebac8d';
  } else if(hora>=12 && hora<18){
    img.src = 'imagens/tarde.jpeg';
    document.body.style.background='#cdd7e6';
  }else{
    img.src = 'imagens/noite.jpeg';
    document.body.style.background='#1e2a52';
  }
}

