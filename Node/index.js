//Importando um objeto atraves do 'require'
//const {Person} = require("./person");

//Inicializamos um objeto pessoa, passando o parametro requerido
//const person = new Person("Honda");

//Testamos o metodo
//console.log(person.sayMyName());

//'package-lock.json', lista as versões dos modulos que estão sendo usados no projeto.

/*  O package Nodemon, funciona como o liveserver, executando automaticamente ao salvar.
      Lembrando que em caso o nodemon seja instalado localmente, como nesse caso, devemos configurar um comando no package.json:
        `${nome do comando}: "nodemon index.js"`
      e iniciamos o nodemon com o comando npm run ${nome do comando}
      Caso o nodemon esteja instalado globalmente, podemos simplesmente executar:
        `nodemon index.js`
*/

//Importando um arquivo para ser executado:
//require('./modules/path');

//Importando o arquivo fs e executando via nodemon
//require('./modules/fs');


//require('./modules/http');


const dotenv = require('dotenv');
dotenv.config();

require('./modules/express')

const connectToDatabase = require('./src/database/connect');
connectToDatabase();

