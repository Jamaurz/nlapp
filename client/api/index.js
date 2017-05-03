var axios = require('axios');

//import { apiPrefix } from '../../etc/config.json';
var apiPrefix = 'https://jamaurznlife.herokuapp.com';

export default {
    add(eventName) {
        return axios.post('https://jamaurznlife.herokuapp.com//add', {'event': eventName});
    },
    searchAddressCoord(city) {
        return axios.post('https://jamaurznlife.herokuapp.com//city', {'city': city});
    },
    singIn() {
        return axios.get('https://jamaurznlife.herokuapp.com//info')
    },
    infoCity() {
        return axios.get('https://jamaurznlife.herokuapp.com//infocity')
    },
    getEvent() {
       return axios.get('https://jamaurznlife.herokuapp.com//getevent');
    },
    getEventG(location) {
       return axios.post('https://jamaurznlife.herokuapp.com//geteventg', {lat: location.lat, lng: location.lng});
    }
}
