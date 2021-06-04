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
          <div className="paths">
            <h1 className="h1">David's Adventure!</h1>
            <li className="li-1">
              <Link to="/" className="home">Home</Link>
            </li>
            <li className="li-2">
              <Link to="/story-editor" className="stories">My Stories</Link>
            </li>
          </div>
          <div className="textbox">
          <Switch>
            <Route path="/story-editor">
              <StoryEditor />
            </Route>
            <Route path="/">
              <Home />               
            </Route>
          </Switch>
          </div>
        </Router>
    )
  }

}



export default App;
