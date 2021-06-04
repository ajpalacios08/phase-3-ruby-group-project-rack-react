import React from 'react';
import StoryContainer from './StoryContainer';
import Body from './Body';

class Home extends React.Component{

    render(){
        return(
            <div>
                Home
                <Body onStoryPost={this.props.onStoryPost}/>
                <StoryContainer onSelectStory={this.props.onSelectStory} user={this.props.user} stories={this.props.stories}/>
            </div>
        )

    }
}

export default Home;