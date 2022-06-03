import { Component, useEffect} from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';
// import { postdata } from '../containers/postdata';

import { requestPostAll } from '../actions';

const mapStateToProps = state => {
    return {
        postdata: state.requestPostAll.postdata,
        isPending: state.requestPostAll.isPending,
        error: state.requestPostAll.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPostAll: () => dispatch(requestPostAll())
    }
}

function HomePage({onNavClick, postdata, isPending, onRequestPostAll}) {
// function HomePage(props) {

    // const { onNavClick, postdata, isPending } = this.props;

    useEffect(() => {
      console.log("Start of useEffect");
      onRequestPostAll();
    }, []); 

    return (
      <div id="container">
        <div id="nav">
          <ul>
            <li className="siteLinks" page="universities" onClick={onNavClick}>Universities</li>
            <li className="siteLinks" page="postal" onClick={onNavClick}>Postal Lookup</li>
          </ul>
        </div>
        <div id="header">
          <h1>Duane Munro Launchpad React Code Challenge</h1>
        </div>
        <div id="content">
          <h1>Home Page - CRUD Operations</h1>
          <button>Display All</button>
          <button>Add</button>
          <button>Edit</button>
          <button>Delete</button>
          <br></br>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <ItemList postdata={postdata}/>  
          </table>
        </div>  
      </div>
    );
  // }
}

// export default HomePage;
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);