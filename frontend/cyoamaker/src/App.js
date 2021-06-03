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


  render(){
    return(
        <Router>
          <div>
          <Header />
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
