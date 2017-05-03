import React from 'react';
import './Event.sass';

export default function Event(props) {
    var count;
    if(!props.user) {
        count = '0'
    } else {
        count = props.user.length
    }
    
    var imgSrc = '';
    
    if(props.photo) {
        imgSrc= 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=' + props.photo;
        imgSrc += '&key=AIzaSyAf6Iakgiv9Ertnc7Fc4gHD3ZtguCjo8bc';
    } 

    return (
        <li>
            <div>
                <img src={imgSrc} alt='image event' />
            </div>
            <div class='eventinfo'>
                <h2>{props.el.name}</h2>
                <h3>Rating: {props.el.rating}</h3>
                <h3>Address: {props.el.vicinity}</h3>
            </div>
            <div class='going'>
                <span onClick={()=> {return props.clickHadler()}}> {count} going </span>
            </div>
        </li>
        )
}