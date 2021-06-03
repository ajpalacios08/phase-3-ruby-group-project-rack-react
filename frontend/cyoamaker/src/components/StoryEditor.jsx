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
            Story Editor
            <form onSubmit={this.handleSubmit}>
                <textarea name="text" value={this.state.story.text} onChange={this.handleChange}/>
                <button>Save</button>
            </form>
        </div>
        )
    }
 
}

export default StoryEditor;