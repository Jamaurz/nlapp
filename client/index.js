// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';
//
// ReactDOM.render(<App />, document.getElementById('app'));

import React from "react"
import ReactDOM from "react-dom"
import { hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux"

import Layout from "./pages/Layout.jsx";

import store from "./store"

const app = document.getElementById('app');

const history = syncHistoryWithStore(hashHistory, store);
console.log(history);
ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    app);