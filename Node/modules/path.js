const path = require('path');

// Nome do Arquivo
console.log(path.basename(__filename));

//Nome do Diretorio Atual
console.log(path.dirname(__filename));

//Extensao do Arquivo
console.log(path.extname(__filename));

//Exibe o objeto Path com formato .json
console.log(path.parse(__filename));

//Juntar caminho de arquivos
console.log(path.join(__dirname, "teste", 'teste.html'));