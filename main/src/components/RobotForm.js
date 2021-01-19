import React from 'react'
import './RobotForm.css'
export default class RobotForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name: "",
            type: "",
            mass: "",
        }
    }

    render() {
        return  (
            <div className="container">
            <label htmlFor="name">Name</label>
            <input type="text"
                id="name" placeholder="nume"
                onChange={e => this.setState({name:e.target.value})} />
            <label htmlFor="type">Type</label>
            <input type="text" id="type" placeholder="type"
                onChange={e => this.setState({type:e.target.value})} /> 
            <label htmlFor="mass">Mass</label>
            <input type="text" id="mass" placeholder="mass"
                onChange={e => this.setState({mass:e.target.value})} />
            <button type="button" value="add"
                onClick={() => {
                    this.props.onAdd(
                        {
                            name: this.state.name,
                            type: this.state.type,
                            mass: this.state.mass
                        }
                    )
                }}>Add Robot</button>
        </div>
        )
    }
}