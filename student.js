var express = require('express')
var router = express.Router()
// var uuid = require('uuid');



const output = [];
router.get('/', function (req, res) {
    res.send(output)
});



router.post('/', function (req, res) {
  const body = req.body;
//   body.id = uuid.v4()
  body.id = new Date().valueOf()
  output.push(body)
  res.send('added')
});
 

router.get('/:id', function (req, res) {
    const id = +req.params.id
    const personid = output.find(obj => obj.id === id)
        res.send(personid)
});
  

router.put('/:id',function(req, res) {
    const id = +req.params.id;
    console.log(id)
    const personid = output.find(obj => obj.id === id);
    const name = req.body.name
    personid.name = name
    res.send('updated');
});


router.delete('/:id', function(req, res) {
    const id = +req.params.id
    const delet = output.findIndex(obj => obj.id === id)
    output.splice(delet, 1)
    res.send('deleted')
});


module.exports = router;
