var path = require('path');
var passport = require('passport');
var request = require('request');
var app = require('express').Router();
var db = require('../utils/DataBaseUtils');

var city = '';

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/getevent', function(req, res) {
    db.getEvent(function(data) {
        res.send(data);
    });
});

app.post('/geteventg', function(req, res) {
    var reqVal = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + req.body.lat + ',' ;
    reqVal += req.body.lng + '&radius=500&type=bar&key=AIzaSyAf6Iakgiv9Ertnc7Fc4gHD3ZtguCjo8bc';
    request(reqVal, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
    })
});

app.post('/add', function (req, res) {
    if(req.user) {
        db.add(req.body.event, req.user.twitter.id, function(data) {
            res.send(data);  
        });
    } else {
        res.send(false);
    }
});

app.post('/city', function (req, res) {
    var reqVal = 'http://maps.google.com/maps/api/geocode/json?address=' + req.body.city;
    request(reqVal, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            city = req.body.city;
            res.send(body)
        }
    })
});

app.get('/infocity', function (req, res) {
    res.send(city);
});

app.get('/info', function (req, res) {
    if(req.user){
        res.send(req.user.twitter.displayName);    
    } else {
        req.send(false);   
    }
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.get('/auth/twitter', passport.authenticate('twitter'));

// handle the callback after twitter has authenticated the user
app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect : '/',
        failureRedirect : '/'
    }));
        

module.exports = app;
