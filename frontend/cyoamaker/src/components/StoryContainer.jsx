import React from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:9292'

class StoryContainer extends React.Component{

    renderStories(stories)
    {
        return stories.map( (story, idx) => 
            <li key={idx} onClick={() =>this.selectStory(idx)}>{story.name}</li>
        )
    }

    selectStory = (index) => {
        this.props.onSelectStory(this.props.stories[index]);
    }

    render(){
        return(
            <div>
                Stories:
                {this.renderStories(this.props.stories)}
            </div>
        )

    }
}

export default StoryContainer;