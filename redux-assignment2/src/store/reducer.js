import * as actionTypes from './action';

const initialState = {
    persons: []
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.ADD : 
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personName,
                age: Math.floor( Math.random() * 40 )
             }
             return {
                 ...state,
                 persons: state.persons.concat(newPerson)
             }
        case actionTypes.REMOVE :
            return { 
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)}
        default :
            return state;
    }
}

export default reducer;