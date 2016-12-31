var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();

// 腾讯视频


var options=
  {
    "音乐": "music",
    "综艺": "variety",
    "电影": "movie",
    "卡通": "cartoon",
    "少儿": "child",
    "娱乐": "ent",
    "纪实": "doco",
    "微电影": "dv",
    "新闻": "news",
    "体育": "sports",
    "搞笑": "fun",
    "游戏": "games",
    "原创": "videoplus",
    "时尚": "fashion",
    "生活": "life"
  }

var mdString='';
console.log('please open your browser with http://localhost:3000/');
app.get('/', function(req, res){

  for (var key in options) {
    var opt=options[key];
    var qqurl='http://v.qq.com/'+opt;
    var str='';
    addMd(qqurl,key,opt,str);
  }

  function addMd(url,key,opt,str){
    request(url,function(error,response,body){
  		if (!error&&response.statusCode==200) {
  			$=cheerio.load(body);
  			var video=$(".figure");
  			var length_v=video.length;

  			video.each(function() {
  				if ($(this).attr('title')) {
  					var title=$(this).attr('title');
  					var href=$(this).attr('href');
            str+='['+title+']('+href+')  \n';
  				}
  			});

  			mdString+='### '+key+'\n\n'+str;
  		}
  	})
  }
  res.send('your videos are in the README.md file');

  fs.writeFile('./README.md',mdString,function(error){
    if (error) {
      throw error;
    }
  })
  console.log('well done');
});

app.listen(3000);
