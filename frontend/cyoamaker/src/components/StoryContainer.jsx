import React from 'react';
import axios from 'axios';

const url = 'http://localhost:9292/user-1'

class StoryContainer extends React.Component{

    state = {
        stories: []
    }

    componentDidMount(){
        this.fetchUserStories()
    }
    
    fetchUserStories() {
    axios.get(url + "/stories").then(userData=>{
        this.setState({stories: userData.data.message })
        console.log(userData.data.message);
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