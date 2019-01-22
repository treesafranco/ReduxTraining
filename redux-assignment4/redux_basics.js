const redux = require('redux');
const createStore = redux.createStore;

const initial ={
    counter : 0
}


//reducer
const rootReducer = (state = initial, action) => {
    if(action.type === 'INC_COUNT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
}
// store
const store = createStore(rootReducer);

//subscription

store.subscribe(() => {
    console.log("[subscription]", store.getState());
})

//disptch action

store.dispatch({ type: 'INC_COUNT'});

