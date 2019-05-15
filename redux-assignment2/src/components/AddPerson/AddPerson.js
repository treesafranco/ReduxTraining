import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        person: ''
    }

    inputHandler = (e) => {
        this.setState({
            person: e.target.value
        })
    }

    addButtonHandler = () => {
        this.props.personAdded(this.state.person);
        this.setState({
            person: ''
        })
    }

    render() {
        return (
            <div className="AddPerson">
                <input type="text" value={this.state.person} onChange={this.inputHandler}/>
                <button onClick={this.addButtonHandler}>Add Person</button>
            </div>
        )
    }  
};

export default AddPerson;