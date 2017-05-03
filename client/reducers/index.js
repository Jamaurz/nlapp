import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import common from "./commonReducer"
import twitter from "./twitterReducer"
import eventg from "./eventgReducer"

export default combineReducers({
    routing: routerReducer,
    common,
    twitter,
    eventg
})
