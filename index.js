const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Shoriful', 'Rafikul', 'Sopon', 'Masum', 'Saiful', 'Mohidul','Halim'];

// app.get('/', (req, res) => {
//     const fruit = {
//         product: 'ada',
//         price:200
//     }
//     res.send(fruit);
//     // res.send("Thanks you for calling me now");
// });
// app.get('/fruits/banana', (req, res) => {
//     res.send({fruit:'banana', quantity:1000, price:10000});
// })

// get
app.get('/users/:id', (req, res) => {
 const id = req.params.id;
 console.log(req.query.sort);
 const name = users[id];
 res.send({id, name});
})

//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})
app.listen(3000, () => console.log('Listenting to port 3000'));