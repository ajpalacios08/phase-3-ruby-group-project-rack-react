import React from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:9292/user-1'

class StoryContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            stories: []
        }       
    }


    componentDidMount(){
        this.fetchUserStories()
    }
    
    fetchUserStories() {
        let finalURL = `${baseURL}/user-${this.props.user.id}/stories`;
        //finalURL = "http://localhost:9292/user-1/stories";
        axios.get(finalURL, {crossDomain: true}, {withCredentials: true})
        .then(userData=>{
            this.setState({stories: userData.data.stories })
            console.log(userData.data.stories);
        })
    }

    renderStories(stories)
    {
        return stories.map( (story, idx) => 
            <li key={idx}>{story.name}</li>
        )
    }

    render(){
        return(
            <div>
                Story Container
                {this.renderStories(this.state.stories)}
            </div>
        )

    }
}

export default StoryContainer;