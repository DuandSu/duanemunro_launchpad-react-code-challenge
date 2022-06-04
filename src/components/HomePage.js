import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import Modal from './Modal';
import './HomePage.css'
// import { postdata } from '../containers/postdata';

import { requestPost } from '../actions';

const mapStateToProps = state => {
    return {
        postdata: state.requestPost.postdata,
        isPending: state.requestPost.isPending,
        error: state.requestPost.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPost: (postArg) => dispatch(requestPost(postArg))
    }
}

function HomePage({onNavClick, postdata, isPending, onRequestPost}) {
// function HomePage(props) {

    // const { onNavClick, postdata, isPending } = this.props;
    const [openModal, setOpenModal] = useState(false);
    const [buttonID, setButtonID] = useState("");

    useEffect(() => {
      console.log("Start of useEffect");
      onRequestPost("/1");
      // onRequestPost("");
    }, []);

    const displayAll = () => {
      onRequestPost("");
    }

    const clickCommit = (e, buttonID, userID, id, title, body) => {
      setOpenModal(false);
      console.log("clickCommit. buttonID = " + buttonID);
      console.log("userID = " + userID);
      console.log("ID = " + id);
      console.log("title = " + title);
      console.log("body = " + body);
      console.log(e.target);
      onRequestPost("");
    }

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
          <button id="DispAllBtn" 
            className="standardBtn"
            onClick={() => displayAll()}
            >Display All</button>
          <button id="SearchBtn" 
            className="openModalBtn" 
            onClick={() => {setOpenModal(true); setButtonID("SearchBtn")}}
            >Search</button>
          <button id="AddBtn" 
            className="openModalBtn" 
            onClick={() => {setOpenModal(true); setButtonID("AddBtn")}}
            >Add</button>
          <button id="EditBtn" 
            className="openModalBtn"
            onClick={() => {setOpenModal(true); setButtonID("EditBtn")}}
            >Edit</button>
          <button id="DelBtn" 
            className="openModalBtn"
            onClick={() => {setOpenModal(true); setButtonID("DelBtn")}}
            >Delete</button>
          { openModal && <Modal closeModal={setOpenModal} clickCommit={clickCommit} buttonID={buttonID}/>}
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