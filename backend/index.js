(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

var express=require('express');
var cors=require('cors');
var bodyparser=require('body-parser');
const {java,python}=require('compile-run');

const app=express();
const port=process.env.PORT||5000;
app.use(cors());
var router = express.Router();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/compile',(req,res)=>{
    if(req.query.mode==='java')
    {
     console.log((req.query.code));
     java.runSource(req.query.code,{stdin:req.query.input})
     .then((result)=>{
        console.log(result);
        res.send(result);
     })
     .catch((err)=>{
         console.log(err);
         res.send(err);
     })
    }
    else{
        //console.log(typeof(req.query.mode),typeof(req.query.input),typeof(req.query.code));
        python.runSource(req.query.code,{stdin:req.query.input})
        .then((result)=>{
           console.log(result);
           res.send(result);
        })
        .catch((err)=>{
            console.log(err);
            res.send(err);
        }) 
    } 
});

app.listen(5000);
console.log('connected');