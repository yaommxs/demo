// node执行此脚本
// node getData.js

var fs = require('fs');

function getData(x=20,y=100){
        var data=[];
        for (var i = 1; i <= x; i++) {
            var perArray=[];
            var xAxis=i;
            var yAxis=Math.floor(Math.random()*y);
            perArray.push(xAxis,yAxis);
            data.push(perArray);
        }
        return data;
}
var data=getData();

fs.writeFile('./data/data.json',JSON.stringify(data));
console.log('ok');