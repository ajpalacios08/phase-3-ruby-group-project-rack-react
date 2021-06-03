import React from 'react';
import axios from 'axios';

const url = 'http://localhost:9292/user-1/'

class Body extends React.Component{

    constructor () {
        super();
        this.state = {
            name: "",
            description: "",
            user_id: 1
        }
    }

    handleClick = (event) => {
        event.preventDefault();

        console.log("Creating new story...");

        axios.post(url + "stories", this.state)
        .then(console.log)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        return(
            <div>
                Body
                <form onSubmit={this.handleClick}>
                    <input type="text" placeholder="Story Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} />
                    <button>Create a story!</button>
                </form>
            </div>
        )

    }
}

export default Body;