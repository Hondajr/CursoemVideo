const {MongoClient,ServerApiVersion} = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.3fczg9l.mongodb.net/database?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } finally {
    await client.close();
  }
}

module.exports = connectToDatabase;