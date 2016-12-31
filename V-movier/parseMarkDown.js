var jsonfile = require('jsonfile');
var request = require('request');
var cheerio = require('cheerio');
var async=require('async');
var file = './v-data.json';

jsonfile.readFile(file, function(err, data) {
  if (err) {
    throw err;
  }
  function getUrlArray(data){
    var urlArray=[];
    for (var i = 0; i < 100; i++) {
      var url='http://www.vmovier.com/'+data[i][0];
      urlArray.push(url);
    }
    return urlArray;
  }
  var urlArray=getUrlArray(data);

  async.map(urlArray,function(url,callback){

    request(url,function(error,response,body){
      if (!error&&response.statusCode==200) {
        var $=cheerio.load(body);
        var Title=$('title').text();
        Title=Title.substring(0,Title.length-4);
        var li=' .['+Title+']('+url+')  \n';
        callback(null,li);
      }
    })

  },function(err,data){
      if (err) {
        throw err;
      }
      function showMarkDown(data){
        var markDown='';
        var numLi=0;
        for (var i = 0; i < data.length; i++) {
          numLi++;
          markDown+=numLi+data[i];
        }
        console.log(markDown);
      }
      showMarkDown(data);
  })

})
