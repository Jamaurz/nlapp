var mongoose = require('mongoose');
var User = require('../models/user.js');
var Event = require('../models/event.js');

exports.find = function() {
    var res = User.find();
    return res;
}

exports.getEvent = function(callback) {
    Event.find({}, {"_id": 0, "place": 1, "user": 1}, function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
}

exports.add = function(event, user, callback) {
    Event.findOne({ place: event }, function(err, doc) {
        if(err) throw err;
        if(doc) {
            //console.log(doc.place, doc.user);
            var allow = true;
            var indexDelete;
            for(var i = 0; i < doc.user.length; i++) {
                if(doc.user[i] == user) {
                    allow = false;
                    indexDelete = i
                }
            }
            
            if(allow) {
                doc.user.push(user);
                doc.save(function(err) {
                    if(err) err;
                    callback('create');
                });
            } else {
                doc.user.splice(indexDelete, 1);
                doc.save(function(err) {
                    if(err) throw err;
                    callback('delete');
                });
            }
        } else {
            var newEvent = new Event();
            newEvent.user.push(user);
            newEvent.place = event;
            newEvent.save(function(err) {
                if(err) throw err;
                callback(true);
            });
        }
    
    });
}