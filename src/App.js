import React, {Component} from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Universities from './components/Universities';
import PostalLookup from './components/PostalLookup';

class App extends Component {
  render () {
    let output = [];
    output.push(<HomePage key="home"/>);
    // output.push(<Universities key="universities"/>);
    // output.push(<PostalLookup key="postal"/>);
    return(
      <div>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" rel="stylesheet"></link>
        </head>
        {output}
      </div>
    )
  }
}

export default App;
