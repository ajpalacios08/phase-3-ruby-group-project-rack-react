import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import StoryEditor from './components/StoryEditor';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      currentUser: {
        user_id: 1
      }
    }
  }


  render(){
    return(
        <Router>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/story-editor">My Stories</Link>
            </li>
          </div>
          <Switch>
            <Route path="/story-editor">
              <StoryEditor />
            </Route>
            <Route path="/">
              <Home />               
            </Route>
          </Switch>
        </Router>
    )
  }

}



export default App;
