var url = require('url');
var request = require('request');
var express = require('express');
var ejs = require('ejs');

var PORT = process.env.PORT || 8080;
var myIP = '178.127.186.68';

var app = express();

app.listen(PORT, function() {
    console.log('App listening port ', PORT);
});

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

//googleSearch
app.get('/google/feed/for/:search', function(req, res) {
    var q = req.params.search;

    var options = {
        protocol: 'http',
        host: 'ajax.googleapis.com',
        pathname: 'ajax/services/feed/find',
        query: {
            v: '1.0',
            userip: myIP,
            q: q
        }
    };

    var needUrl = url.format(options);
    //console.log(needUrl);
    request(needUrl, function(err, response, body) {
        var feeds = JSON.parse(body);
        res.render('googleSearch', {
            feeds: feeds.responseData,
            keyword: q
        });
    });
});

//yandexNews
app.get('/yandex/:cnt/news/for/:search', function(req, res) {
    var cnt = req.params.cnt;
    var search = req.params.search;

    var options = {
        protocol: 'http',
        host: 'ajax.googleapis.com',
        pathname: 'ajax/services/feed/load',
        query: {
            v: "1.0",
            userip: myIP,
            num: cnt,
            q: 'http://news.yandex.ru/' + search + '.rss'
        }
    };

    var needUrl = url.format(options);
    request(needUrl, function(err, response, body) {
        var feeds = JSON.parse(body);
        res.render('yandexNews', {
            news: feeds.responseData.feed,
            category: search,
            count: cnt
        });
    });
});
