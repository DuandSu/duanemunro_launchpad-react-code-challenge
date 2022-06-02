import React, {Component} from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Universities from './components/Universities';
import PostalLookup from './components/PostalLookup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'home',
    }
  }

  onNavClick = (e) => {
    const pageClicked = e.target.getAttribute('page');
    this.setState({page: pageClicked})
  }

  render () {
    console.log("At render of App!");
    console.log("Page: " + this.state.page);
    let output = [];

    if (this.state.page === "universities")
      output.push(<Universities key="universities" onNavClick={this.onNavClick}/>);
    else if (this.state.page ==="postal")
      output.push(<PostalLookup key="postal" onNavClick={this.onNavClick}/>);
    else
      output.push(<HomePage key="home" onNavClick={this.onNavClick}/>);

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
