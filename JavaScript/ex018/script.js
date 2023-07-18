function validar(valor){
  if(valor.value ===''){
    alert('[ERRO] Verifique os campos e tente novamente')
    return false;
  }
  if(Number(valor.value)<1 ||Number(valor.value)>100){
    alert('Número fora da faixa aceita, digite um valor entre 1 e 100')
    return false;
  }
  return true;
}

function adicionar(){
  var tnum = document.getElementById('tNum');
  if(!validar(tnum)){
    return;
  }

  var select = document.getElementById('tArray');
  var numeros = select.options.length === 0 ? [] : Array.from(select.options).map(option => Number(option.value));
  
  //Teste se a div#res esta vazia
  var res = document.getElementById('res');
  if (res.innerHTML !== "") {
    res.innerHTML = "";
    select.innerHTML = "";
    numeros = [];
  }

  var novoNumero = Number(tnum.value);
  if(numeros.includes(novoNumero)){
    alert(`Este numero (${novoNumero}) já foi adicionado`);
    return;
  } else{
    numeros.push(novoNumero);
    var novaOpt = document.createElement('option');
    novaOpt.value = novoNumero;
    novaOpt.text = `Valor ${novoNumero} adicionado.`
    select.appendChild(novaOpt);
  }
}

function calcular(){
  var select = document.getElementById('tArray');
  var res = document.getElementById('res');
  var numeros=[];
  var soma = 0;
  var qtde = 0;

  for(var i = 0; i< select.options.length;i++){
    numeros[i] = Number(select.options[i].value);
    soma+=numeros[i];
    qtde+=1;
  }
  
  res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`;
  numeros.sort(function(a, b) {
    return a - b;
  });
  var max = numeros[qtde-1];
  var min = numeros[0];
  res.innerHTML += `<p>O maior valor informado foi ${max}.</p>`;
  res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`;
  res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
  res.innerHTML += `<p>A média dos valores digitados é ${soma/qtde}.</p>`;
}