import React from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios';

const url = 'http://localhost:9292/users'

class App extends React.Component{


  fetchUser() {
    axios.get(url).then(userData=>console.log(userData.data))
  }
  componentDidMount(){
    this.fetchUser()
  }

  render(){
    return(
      <Header/>
    )
  }

}



export default App;
