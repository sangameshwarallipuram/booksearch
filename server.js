
var express = require('express');  
var app = express();  

var hanbars = require('express-handlebars');

app.engine('handlebars', hanbars({
    defaultLayout : 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

const port = 3000;
  
app.get('/', (req, res) => {
    res.render('home.handlebars');
});

app.get('/about', (req, res) => {
    res.render('about');
});

const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

app.listen(port, (err) =>{
    console.log("Starting up");
    if (err) 
        console.log("error");
        else
        console.log("Env : " + process.env.myenv);
        console.log("Args " + process.execArgv);
        console.log("Ags" + process.execPath);
        console.log("uid " + process.getegid + " " + process.getuid);
        console.log("Array : " + typedArray1);
        console.log("Running the Server");
})