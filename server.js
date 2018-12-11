var http = require('http');
var fs = require('fs');

 //var username;

var express = require('express');
var request = require('request');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
var request = require('request');
 //var username;


app.get('/',function(req,res){
    return res.render('login')
})

app.post('/',function(req,res){
    var username = req.body.username;
    res.render('hello');
})


// app.get('/', function(req, res){
//     var search = req.query.search;
//     var url = `https://opentdb.com/api.php?amount=${search}`;
   
//     request(url, function(error, response, body){
//         if(!error){
//             var data = JSON.parse(body)
//             res.render('results', {data: data});
//         }
//     });

// const data = {
//     "users": [{
//         "user": "admin"
//         , "pass": "password"
//         , "id": 1
// }, {
//         "user": "admin1"
//         , "pass": "password2"
//         , "id": 2
// }]
// };

// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());
// // app.get('/users', function (req, res) {
// //     //see all users
// //     res.send('GET sent')
// //})
app.get('/',function(req,res){
    return res.render('login')
})

app.post('/',function(req,res){
    var username = req.body.username;
    res.render('hello');
})
// app.post('/users', function (req, res) {
//     //create add user
    
//     req.body.id = data.users.length+1;
//     data.users.push(req.body);
//     console.log(req.body);
//     console.log(data);
//     res.send('POST sent')
// })
// app.get('/users/:id', function (req, res) {
//     //get user info by id
//     console.log(req.params);
//     res.send('user by ID');
// })
// app.put('/users/:id', function (req, res) {
//     //update user
//     console.log(req.params);
//     res.send('PUT sent ' + req.params.id)
// })
// app.delete('/users/:id', function (req, res) {
//     //delete user
//     console.log(req.params);
//     res.send('DELETE sent')
// })

//app.post('')
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index1.html',null,function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write('File not found!');
        }
        else {
            response.write(data);
        }
        response.end();
    });



}

http.createServer(onRequest).listen(8000);
app.listen(3000)

