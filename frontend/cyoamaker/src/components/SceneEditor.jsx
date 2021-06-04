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
        console.log(this.props)
        this.setState({text: this.props.scene.text})
    }

    handleChange = (event) => {
        this.setState( {[event.target.name]: event.target.value} )
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    saveScene = () => {
        let newSceneData = {
            ...this.props.scene,
            text: this.state.text
        }

        let targetURL = `${baseURL}/scenes/${newSceneData.id}`;

        axios.patch(targetURL, newSceneData)
        .then(console.log)
    }

    render(){
        return (
            <div className="textbox">
                <h3>Scene: {this.props.scene.id}</h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows="15" cols="100" style={{"vertical-align": "top"}} className="textarea" name="text" value={this.state.text} onChange={this.handleChange}/>
                    <button className="saveButton" onClick={this.saveScene}>Save</button>
                </form>
            </div>
        )
    }
    
}

export default SceneEditor;