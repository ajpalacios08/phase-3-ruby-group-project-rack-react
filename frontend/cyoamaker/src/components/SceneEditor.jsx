import React from 'react';
import axios from 'axios';

let baseURL = "http://localhost:9292"

class SceneEditor extends React.Component{
 
    constructor(){
        super();
        this.state = {
            text: ""
        }
    }

    componentDidMount(){
        this.setState({text: this.props.scene.text})
    }

    handleChange = (event) => {
        this.setState( {[event.target.name]: event.target.value} )
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <h3>Scene: {this.props.scene.id}</h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
            </div>
        )
    }
    
}

export default SceneEditor;