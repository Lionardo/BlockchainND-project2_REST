var express = require('express');
const SHA256 = require('crypto-js/sha256');
const { Blockchain, Block, errorFunction } = require('../blockchain/simpleChain');
let blockchain = new Blockchain();
var router = express.Router();

/* GET block. */
// add new block
router.get('/', function (req, res, next) {
  async function fetchHeight() {
    let h = await blockchain.getBlockHeight();
    res.status(200);
    res.send(JSON.stringify(h));
  }
  fetchHeight();
});
router.post('/block', function (req, res, next) {
  if (req.body.data === '') {
    res.status(500);
    res.send(JSON.stringify({
      'code':'500',
      'status':'Internal Server Error',
      'message':'empty data'
    }));
  } else {
    async function response(){
      await blockchain.addBlock(new Block(req.body.data));
      let h = await blockchain.getBlockHeight();
      await blockchain.validateBlock(h)
      let height = h+1;
      let lastBlock = await blockchain.getBlock(height);
      res.status(200);
      res.send(JSON.stringify(lastBlock));
    }
    response();
  }
});
router.get('/block/:height', function (req, res, next) {
  const { height } = req.params;
  async function getheight(){
    let blockchainheight = await blockchain.getBlockHeight();
    if(height <= blockchainheight && !isNaN(height)){
      let block = await blockchain.getBlock(height);
      res.status(200)
      res.send(JSON.stringify(block));
    }else{
      res.send(JSON.stringify({
        'code':'500',
        'status':'Internal Server Error',
        'message':'Is not a number or number is higher than the blockchain height'
      }));
      
    }
  }
  getheight();
});


module.exports = router;
