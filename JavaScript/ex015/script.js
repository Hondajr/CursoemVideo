function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');

  if (fano.value.length ==0 ||fano.value>ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente');
  } else {
    var fsex = document.getElementsByName( 'radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id','foto');
    if(fsex[0].checked){
      genero='Homem'
      if(idade>0 && idade<=15){
        img.setAttribute('src','imagens/kid-m.jpeg');
      }else if(idade<=21){
        img.setAttribute('src','imagens/young-m.jpeg');
      } else if(idade<=50){
        img.setAttribute('src','imagens/adult-m.jpeg');
      }else{
        img.setAttribute('src','imagens/old-m.jpeg');
      }
    } else{
      genero='Mulher'
      if(idade>0 && idade<=15){
        img.setAttribute('src','imagens/kid-f.jpeg');
      }else if(idade<=21){
        img.setAttribute('src','imagens/young-f.jpeg');
      } else if(idade<=50){
        img.setAttribute('src','imagens/adult-f.jpeg');
      }else{
        img.setAttribute('src','imagens/old-f.jpeg');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}