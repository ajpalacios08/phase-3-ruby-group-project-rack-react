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
        user_id: 1,
        name: ""
      }
    }
  }

  componentDidMount(){
    axios.get(baseURL + "/users")
    .then( resp => this.setState({user: resp.data.users[0]}) )
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
              <Home user={this.state.user}/>               
            </Route>
          </Switch>
        </Router>
    )
  }

}



export default App;
