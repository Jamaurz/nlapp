import React from 'react';
import { connect } from "react-redux"

import {add, getEvent, getAllEvent, getEventG, allEventG, searchAddressCoord, infoCity, setPhoto} from "../actions/commonActions"

import Event from './Event.jsx';
import './List.sass';

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        events: store.common.events,
        eventg: store.eventg.events
    };
})
export default class List extends React.Component {
    componentWillMount() {
        var tempThis = this;
        
        getEvent(function(data) {
            //console.log(data);
            tempThis.props.dispatch(getAllEvent(data));
        });
        
        infoCity(function(city) {
            if(city) {
                searchAddressCoord(city, function(data) {
                    if(data) {
                        getEventG(data, function(data) {
                            tempThis.props.dispatch(allEventG(data));
                            tempThis.textSearch.value = '';
                        });
                    } else {
                        console.log('address is wrong')
                        tempThis.props.dispatch(allEventG([]));
                    }
                });
            }
        })
    }

    addEvent(eventName) {
        var tempThis = this;
        add(eventName, function(data) {
            if(data) {
                //console.log(data);
                getEvent(function(data) {
                    tempThis.props.dispatch(getAllEvent(data));
                });
            } else {
                //address
                window.open("https://nightlife-jamaurz.c9users.io/auth/twitter", "_self");
            }
        });
    }

    search() {
        var city = encodeURIComponent(this.textSearch.value);
        var tempThis = this;
        
        searchAddressCoord(city, function(data) {
            if(data) {
                getEventG(data, function(data) {
                    tempThis.props.dispatch(allEventG(data));
                    tempThis.textSearch.value = '';
                });
            } else {
                //console.log('address is wrong')
                tempThis.props.dispatch(allEventG([]));
            }
        });
    }
    
    render() {
        return (
            <div class='content'>
                <div class='input'>
                    <input type='text' ref={(search) => { this.textSearch = search; }} />
                    <input type='button' onClick={this.search.bind(this)} value='search' />
                </div>
                <ul class='events'> 
                    { 
                        this.props.eventg.map((el, index) => {
                            return <Event 
                                        key={index} 
                                        el={el} 
                                        user={this.props.events[el.place]} 
                                        clickHadler={() => {this.addEvent(el.place)}}
                                        photo={el.photo}
                                    />    
                        })
                    }
                </ul>
            </div>
        )
    }
}