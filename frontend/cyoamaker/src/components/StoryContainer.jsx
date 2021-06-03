import React from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:9292'

class StoryContainer extends React.Component{

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
                {this.renderStories(this.props.stories)}
            </div>
        )

    }
}

export default StoryContainer;