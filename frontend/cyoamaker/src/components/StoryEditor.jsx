import React from 'react';

class StoryEditor extends React.Component
{
    constructor(){
        super();
        this.state = {
            story: {
                name: "",
                text: "",
                id: null
            },
            scene: {}
        }
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
            <h2>Story Editor</h2>
            <form onSubmit={this.handleSubmit}>
                <textarea rows="15" cols="100" style={{"vertical-align": "top"}}name="text" value={this.state.story.text} onChange={this.handleChange} classname="textarea" />
                <button className="saveButton">Save</button>
            </form>
        </div>
        )
    }
 
}

export default StoryEditor;