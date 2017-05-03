import React from 'react';
import { Link } from 'react-router';

import Header from '../components/Header.jsx';
import List from '../components/List.jsx';

import './Layout.sass';

export default class Layout extends React.Component {
    render() {
        return (
            <div class='app'>
                <Header />
                <List />
            </div>
        )
    }
}