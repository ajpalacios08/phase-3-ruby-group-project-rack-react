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
    
    generateSceneOptions = () => {
      return this.state.scenes.map( (scene, idx) => {
            return <option value={scene}>Scene ID:{scene.id}</option>
        })
    }

    handleChangeScene = (event) => {
        let scene = event.target.value;
        this.setState({currScene: scene})
    }

    loadingPlaceholder = () => {
        return <h2>Please Wait...</h2>
    }

    render(){
        return (
        <div>
            <h1>{this.props.story.name}</h1>
            <select name="currScene" onChange={this.handleChangeScene}>
                {this.generateSceneOptions()}
            </select>
            {
                this.state.isLoadingContent ? this.loadingPlaceholder() : <SceneEditor scene={this.state.currScene}/>
            }
            <button>New Scene</button>
            <button onClick={this.props.onDeselectStory}>Go Back</button>
        </div>
        )
    }
 
}

export default StoryEditor;