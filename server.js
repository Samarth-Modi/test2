 /*************************************************************************
* BTI325– test 2
* I declare that this test is my own work in accordance with Seneca Academic
Policy. No part * of this test has been copied manually or electronically from any
other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Samarth Modi Student ID: 133357202 Date: 18-10-2022
*
* Your app’s URL (from Cyclic) : https://lilac-python-toga.cyclic.app/
*
*************************************************************************/
var express = require("express");
var app = express();

var data = require("./test2_moduleA");

var path = require("path");

app.use(express.static('public'))

var HTTP_PORT = process.env.PORT||8080;

function onHttpStart() 
{
    console.log(`Express http server listening on ${HTTP_PORT} `);
}

app.get('/',(req,res) =>
{
    res.send("<h2>Declaration</h2>"+"<p>I acknowledge the College's academic integrity policy - and my own integrity - remain in effect whether my work is done remotely or onsite. Any test or assignment is an act of trust between my and my instrucotr, and especially with my classmates... even when no one is watching. I declare I will not break that trust"+
    "<b><br>"+" Name: <b><mark>Samarth Modi</mark></b> <br> Student Number: <b><mark>133357202</mark></b><br>"
    +"<a href ='/BSD'>Click to visit BSD Students</a><br>"+
    "<a href = '/highGPA'> Click to see who has the highest GPA </a>")
})

app.get('/BSD',function(req,res)
{
   data.getBSD().then((data) => 
   {
        var a = JSON.stringify(data);
        res.send(a);
   })
})

app.get('/highGPA',function(req,res)
{
    data.highGPA().then((data) => 
    {
        const receive  = "<body><h1>Highest GPA: </h1><p>Student ID: " + data[0].studId +"</p>"+
      "<p>Name "+ data[0].name +"</p>"+
      "<p>Program: " +data[0].program +"</p>"+
      "<p>GPA: " + data[0].gpa + "</p></body>";
      res.send(receive); 
    })
})

app.use(function(req,res)
{   
    res.status(404).send('Page Not Found')
})



data.init().then(function(data)
{
    app.listen(HTTP_PORT,onHttpStart);
})
.catch(function(err)
{
    console.log('Fail to start ! '+ err);
})
