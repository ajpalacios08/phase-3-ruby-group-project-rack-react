import React from 'react';
import axios from 'axios';
import SceneEditor from './SceneEditor';

let baseURL = "http://localhost:9292"

class StoryEditor extends React.Component
{
    constructor(){
        super();
        this.state = {
            scenes: [],
            currScene: {},
            isLoadingContent: true
        }
    }

    componentDidMount(){
        this.getScenes()
    }

    getScenes = () => {
        let finalURL = `${baseURL}/stories/${this.props.story.id}/scenes`;
        axios.get(finalURL)
        .then(resp => {
            this.setState({currScene: resp.data.scenes[0], scenes: resp.data.scenes, isLoadingContent: false})            
        })
    }
    
    handleChange = (event) => {
        this.setState( {story: 
                {
                    ...this.state.story,
                    [event.target.name]: event.target.value
                }
            } 
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return (
        <div>
            <h1>{this.props.story.name}</h1>
            {
                this.state.isLoadingContent ? null : <SceneEditor scene={this.state.currScene}/>
            }
            <button onClick={this.props.onDeselectStory}>Go Back</button>
        </div>
        )
    }
 
}

export default StoryEditor;