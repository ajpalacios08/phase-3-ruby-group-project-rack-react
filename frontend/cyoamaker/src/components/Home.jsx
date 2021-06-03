import React from 'react';
import StoryContainer from './StoryContainer';
import Body from './Body';

class Home extends React.Component{


    render(){
        return(
            <div>
                Home
                <Body/>
                <StoryContainer user={this.props.user}/>
            </div>
        )

    }
}

export default Home;