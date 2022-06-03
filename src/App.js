import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './components/HomePage';
import Universities from './components/Universities';
import PostalLookup from './components/PostalLookup';

import { setPage } from './actions';

const mapStateToProps = state => {
  return {
      page: state.setPage.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNavClick: (e) => dispatch(setPage(e.target.getAttribute('page')))
  }
}

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     page: 'home',
  //   }
  // }

  // onNavClick = (e) => {
  //   const pageClicked = e.target.getAttribute('page');
  //   this.setState({page: pageClicked})
  // }

  render () {
    const { page, onNavClick } = this.props;
    console.log("Render of App. page = ", page)
    let output = [];

    if (page === "universities")
      output.push(<Universities key="universities" onNavClick={onNavClick}/>);
    else if (page ==="postal")
      output.push(<PostalLookup key="postal" onNavClick={onNavClick}/>);
    else
      output.push(<HomePage key="home" onNavClick={onNavClick}/>);

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
