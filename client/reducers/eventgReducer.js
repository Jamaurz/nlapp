export default function reducer(state={
                                    events: []
                                }, action) {

    if (action.type ==  "ALL_EVENT_G") {
        return {
            events: action.payload
        }
    }
    return state
}
