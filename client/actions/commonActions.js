import api from '../api';

export function addEvent(value) {
    return {
        type: "ADD_EVENT",
        payload: value
    }
}

export function searchAddressCoord(city, callback) {
    api.searchAddressCoord(city).then(function(data) {
        if(data && data.data.results.length > 0) {
            callback(data.data.results[0].geometry['location']);
        } else {
            callback(false);
        }
    })
}

export function infoCity(callback) {
    api.infoCity().then(function(data) {
        if(data) {
            callback(data.data);
        } else {
            callback(false);
        }
    })
}

export function getEventG(location, callback) {
    api.getEventG(location).then(function(data) {
        var res = [];
        for(var i = 0; i < data.data.results.length; i++)  {
            var item = {};
            var photo = 'none';
            if(data.data.results[i].photos) photo = data.data.results[i].photos[0].photo_reference;
            item.name = data.data.results[i].name;
            item.photo = photo;
            item.rating = data.data.results[i].rating;
            item.vicinity = data.data.results[i].vicinity;
            item.place = data.data.results[i].place_id;
            res.push(item);
        }
        if(data) {
            callback(res);
        }
    })
}

export function allEventG(value) {
    return {
        type: "ALL_EVENT_G",
        payload: value
    }
}

export function getEvent(callback) {
    api.getEvent().then(function(data) {
        if(data) {
            var res = {};
            for(var i = 0; i < data.data.length; i++) {
                res[data.data[i].place] = data.data[i].user;
            }
            callback(res);
        }
    })
}

export function getAllEvent(value) {
    return {
        type: "GET_ALL_EVENT",
        payload: value
    }
}

export function add(eventName, callback) {
    api.add(eventName).then(function(data) {
        //console.log('data add action', data)
        
        if(!data.data) {
            callback(false);
        } else {
            callback(data.data);
        }
        
    });
}

export function singIn(callback) {
    api.singIn().then(function(data) {
        if(data) {
            callback(data.data);
        }
    });
}


export function singInTwitter(value) {
    return {
        type: "SING_IN_TWITTER",
        payload: value
    }
}

export function twitter(value) {
    console.log('value', value);
    return {
        type: "TWITTER",
        payload: value
    }
}
