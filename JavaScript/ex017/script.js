function tabuada(){
  var tnum = document.getElementById('txtNumero');
  var select = document.getElementById('txtTbd');
  if(tnum.value===''){
    alert('[ERRO] Verifique o campo número e tente novamente');
    return;
  }
  select.innerHTML='';

  for(var i =0; i<=10;i++){
    var novaOpt = document.createElement('option');
    novaOpt.text = `${Number(tnum.value)} x ${i} = ${Number(tnum.value)*i}`
    select.appendChild(novaOpt);
  }
}

function limpar(){
  var select = document.getElementById('txtTbd');
  select.innerHTML='';
  var novaOpt = document.createElement('option');
  novaOpt.value="";
  novaOpt.text="Digite um número acima";
  select.appendChild(novaOpt);
}