const express = require('express');
const router = express.Router()
const uuid = require('uuid');
const port = 3000

const input = [];
router.post('/', function(req, res) {
const body = req.body
  body.id = new Date().valueOf();
input.push(body);
    res.send(input)
});


router.get('/:id',(req, res) => {
    const id = req.params.id
    const bookid = input.find(obj => obj.id === id);
    res.send(bookid);
});


router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const bookid = input.find(obj => obj.id === id);
    const location = req.body.location;
    bookid.location = location;
    const name = req.body.name;
    bookid.name = name;
    res.send("updated")
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const bookid = input.find(obj => obj.id === id);
    input.splice(bookid, 1);
    res.send('deleted');
})


module.exports = router;
