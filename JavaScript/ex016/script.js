function contar(){
  var validacao = validar();
  if(!validacao){
    return;
  }

  var tInicio = document.getElementById('txtInicio');
  var inc = Number(tInicio.value);
  var tFim = document.getElementById('txtFim');
  var fim = Number(tFim.value);
  var tPasso = document.getElementById('txtPasso');
  var passo = Number(tPasso.value);
  var res = document.getElementById('res');
  res.innerHTML='';
  for (inc;inc<= fim;inc+=passo){
      res.innerHTML += inc;
      if(inc+passo <=fim){
        res.innerHTML += ' 👉 ';
      } else{
        res.innerHTML += ' 🚩 ';
      }
  }
}

function validar(){
  var tInicio = document.getElementById('txtInicio');
  var tFim = document.getElementById('txtFim');
  var tPasso = document.getElementById('txtPasso');

  if(tInicio.value === '' || tFim.value === ''){
    alert('Preencha os campos e tente novamente');
    return false;
  }
  if(tPasso.value === ''||Number(tPasso.value)===0){
    alert('[ERRO] Verifique o valor do passo');
    return false;
  }
  return true;
}