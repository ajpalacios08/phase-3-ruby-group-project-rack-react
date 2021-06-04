import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import StoryEditor from './components/StoryEditor';

let baseURL = "http://localhost:9292";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      user: {
        id: 1,
        name: ""
      },
      stories: [],
      currStory: {}
    }
  }

  componentDidMount(){
    axios.get(baseURL + "/users")
    .then( resp => {
        this.setState({user: resp.data.users[0]});
        this.fetchUserStories();
      } 
    )
  }

  fetchUserStories() {
    let finalURL = `${baseURL}/user-${this.state.user.id}/stories`;

    axios.get(finalURL)
    .then(userData=>{
        this.setState({stories: userData.data.stories })
        this.setState({currStory: userData.data.stories[0]})
        console.log(userData.data.stories);
    })
  }

  onStoryPost = (story) =>
  {
    let finalURL = `${baseURL}/user-${this.state.user.id}/stories`;

    axios.post(finalURL, story)
    .then(console.log)
  }

  render(){
    return(
        <Router>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/story-editor">Story Editor</Link>
            </li>
          </div>
          <Switch>
            <Route path="/story-editor">
              <StoryEditor 
                user={this.state.user} 
                story={this.state.currStory} 
                getScenes={this.getScenes}
              />
            </Route>
            <Route path="/">
              <Home 
                onStoryPost={this.onStoryPost} 
                user={this.state.user} 
                stories={this.state.stories}
              />               
            </Route>
          </Switch>
        </Router>
    )
  }

}



export default App;
