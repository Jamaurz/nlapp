export default function reducer(state={
                                    events: []
                                }, action) {

    if (action.type ==  "ADD_EVENT") {
        return {
            ...state,
            events: [...state.events, action.payload],
        }
    } else if (action.type ==  "GET_ALL_EVENT") {
        return {
            ...state,
            events: action.payload
        }
    }
    return state
}
