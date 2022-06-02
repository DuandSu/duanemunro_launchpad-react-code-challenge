import React, {Component} from 'react';
import './App.css';
import HomePage from './components/HomePage';

class App extends Component {
  render () {
    return(
      <div>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" rel="stylesheet"></link>
        </head>
        <HomePage/>
      </div>
    )
  }
}

export default App;
