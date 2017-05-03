var axios = require('axios');

//import { apiPrefix } from '../../etc/config.json';
var apiPrefix = 'https://jamaurznlapp.herokuapp.com';

export default {
    add(eventName) {
        return axios.post(apiPrefix + '/add', {'event': eventName});
    },
    searchAddressCoord(city) {
        return axios.post(apiPrefix + '/city', {'city': city});
    },
    singIn() {
        return axios.get(apiPrefix + '/info')
    },
    infoCity() {
        return axios.get(apiPrefix + '/infocity')
    },
    getEvent() {
       return axios.get(apiPrefix + '/getevent');
    },
    getEventG(location) {
       return axios.post(apiPrefix + '/geteventg', {lat: location.lat, lng: location.lng});
    }
}
