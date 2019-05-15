import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionType from '../store/action';


class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPersonHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.removePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons : state.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPersonHandler: (personName) => dispatch({type: actionType.ADD, personName: personName}),
        removePersonHandler: (id) => dispatch({type: actionType.REMOVE, personId: id})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);