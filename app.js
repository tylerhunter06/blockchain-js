const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');


let Block = require('./models/block')
let Transaction = require('./models/transaction')
let Blockchain = require('./models/blockchain')

//creating genesis block
let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

//creating a transaction
let transaction = new Transaction('Tyler','Fatimah',741)
let block = blockchain.getNextBlock([transaction])
blockchain.addBlock(block)

let anotherTransaction = new Transaction('Adam','Hunter',2017)
let block1 = blockchain.getNextBlock([anotherTransaction,transaction])
blockchain.addBlock(block1)

console.log(blockchain)
