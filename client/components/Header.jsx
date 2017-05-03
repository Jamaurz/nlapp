import React from 'react'
import { connect } from "react-redux"

import {singIn, singInTwitter} from "../actions/commonActions"
import Login from './Login.jsx';
import './Header.sass';

@connect((store) => {
    return {
        user: store.twitter.user
    };
})
export default class Header extends React.Component {
    componentWillMount() {
        var tempThis = this;
        singIn(function(data) {
            tempThis.props.dispatch(singInTwitter(data));
        });
    }
    
    render() {
        return (
            <header id='header'>
                <div class="container">
                    <h1><a href='#'>Nightlife Coordination App</a></h1>
                    <Login login={this.props.user} />
                </div>
            </header>
            )
    }
}