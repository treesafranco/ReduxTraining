const initialState = {
    counter:0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT' :
            return {
                counter: state.counter + 1
            }
            break;
        case 'DECREMENT' : 
            return {
                counter: state.counter - 1
            }
            break;
        case 'ADD_5' : 
            return {
                counter: state.counter + 5
            }
            break;
        case 'SUBSTRACT_5' : 
            return {
                counter: state.counter - 5
            }
            break;
        default:
            return state;
    }
}

export default reducer;