import React from 'react';
import StoryContainer from './StoryContainer';
import Body from './Body';

class Home extends React.Component{

    render(){
        return(
            <div className="textbox">
                <p className="intro"><p className="h2Intro">Instructions:</p>Welcome to A & D Adventure Builder! This is a tool to help build your own adventure game. First you will be asked to make a story name with a description. Once you have created a story, click on it's name to go to the editor.</p>
                <Body onStoryPost={this.props.onStoryPost}/>
                <StoryContainer onSelectStory={this.props.onSelectStory} user={this.props.user} stories={this.props.stories}/>
            </div>
        )

    }
}

export default Home;