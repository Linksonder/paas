var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Field = mongoose.model('Field');
var fieldManager = require('../domain/fieldManager');
var socket = require('../socket');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fields', (req, res, next) => {
    let field = {
      name: req.body.name
    };

    field.eggs = fieldManager.hideEggs();


    let test = new Field(req.body).save(data => {
        res.send('added a field!')
    });
})

router.get('/fields/:id', (req, res, next) => {
  let x = req.query.x;
  let y = req.query.y;
  Field.findOne({ _id: req.params.id}).then(field => {

      let foundAnEgg = false;
      field.eggs.forEach(egg => {
          if(egg.x == x && egg.y == y){
            foundAnEgg = true;
          }
      });

      if(foundAnEgg){
        res.send('You found an egg!')
        socket.sendMessage('Someone found an egg!!!');
      }
      else {
        res.send('Ow noes, this place is empty')
      }
   
  })

})

router.get('/field/:id/:x/:y', (req, res, next) => {
  //wel of niet prijs
  res.send(true);
})

module.exports = router;
