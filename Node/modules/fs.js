const fs = require('fs');
const path = require ('path');

/*Criar pasta*/
fs.mkdir(path.join(__dirname,'/teste'),(error)=> {
  if(error){
    return console.log('Erro: ', error);
  }
  console.log('Pasta criada com sucesso!');
});

/* Criar um arquivo 
  Ele somente vai criar o arquivo, caso a pasta não exista retorna erro.  
  Caso seja executado novamente, ele substitui o arquivo por inteiro.
  WriteFile é uma função assincrona, o node por ser no-block, ele não espera que funções assincronas executem, pra continuar o codigo.
  Assim, os comandos de update e leitura, devem ser adicionados ao bloco do writefile, para que sejam executados somente ao terminar o writefile.
*/
fs.writeFile(path.join(__dirname,'/teste','teste.txt'), 'Hello World!', (error)=>{
  if(error){
    return console.log('Erro: ', error);
  }
  console.log('Arquivo criado com sucesso')
  /*Adicionar conteudo ao arquivo*/
  fs.appendFile(path.join(__dirname,'/teste','teste.txt'), '\nHello Node!', (error)=>{
    if(error){
      return console.log('Erro: ', error);
    }
    console.log('Arquivo modificado com sucesso')
  });
  /* Ler Arquivo*/
  fs.readFile(path.join(__dirname,'/teste','teste.txt'),'utf8', (error,data)=>{
    if(error){
      return console.log('Erro: ', error);
    }
    console.log(data);
  });
});


