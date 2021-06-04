import React from 'react';
import axios from 'axios';

const url = 'http://localhost:9292/user-1'

class Body extends React.Component{

    constructor () {
        super();
        this.state = {
            story: {
                name: "",
                description: "",
                user_id: 1
            }
        }
    }

    handleClick = (event) => {
        event.preventDefault();

        console.log("Creating new story...");

        this.props.onStoryPost(this.state.story);
    }

    handleChange = (event) => {
        this.setState(
            {story:
                {
                    ...this.state.story, 
                    [event.target.name]: event.target.value 
                }
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onStoryPost(this.state.story);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleClick} className="form">
                    <input type="text" placeholder="Story Name" name="name" value={this.state.story.name} onChange={this.handleChange}/>
                    <input type="text" placeholder="Description" name="description" value={this.state.story.description} onChange={this.handleChange} className="description" />
                    <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Create a story!</button>
                </form>
            </div>
        )

    }
}

export default Body;