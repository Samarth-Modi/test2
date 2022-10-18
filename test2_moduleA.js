var fs = require('fs');
let students = [];

module.exports.init = function()
{
    return new Promise((res,rej)=>
    {
        fs.readFile('./students.json',(err,data) =>
        {
            if(err)
            {
                rej(err);
            }
            students= JSON.parse(data);
            res();
        });
    });
};

module.exports.getBSD = function()
{
    return new Promise((res,rej) =>
    {
        var i = [];
        for(let a = 0; a < students.length; ++a)
        {
            if(students[a].program == "BSD")
            {
                i.push(students[a]);            
            }
        } 
        if(students.length == 0)
        {
            rej("No Results returned");
        }
        res(i);
    });
};

module.exports.highGPA = function()
{
    return new Promise((res,rej) =>
    {
        var max = students[0].gpa;
        var a = [];
        for(let i = 0; i < students.length ; ++i)
        {
            if(students[i].gpa > max)
            {
                max=students[i].gpa;
                a.push(students[i]);
            }
        }
        if(students.lenght == 0)
        {   
            rej("NO results returned");
        }
        res(a);
    });
};
