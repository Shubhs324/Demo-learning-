var express = require ('express');
var app = express();
var port = 3000;
var host = '127.0.0.1';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/',(req,res)=>{
    res.render('index', {title: 'Welcome to EjS Page'});
}); 

app.listen(port,host,()=>{
    console.log(`Server running at http://${host}:${port}`);
})