import { connect } from 'react-redux';
import PostalItemList from './PostalItemList';
import './PostalLookup.css';

import { requestZip } from '../actions';

const mapStateToProps = state => {
  return {
      zipdata: state.requestZip.zipdata,
      isPending: state.requestZip.isPending,
      isError: state.requestZip.isError,
      error: state.requestZip.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestZip: (zipArg) => dispatch(requestZip(zipArg))
  }
}

function PostalLookup({onNavClick, zipdata, isPending, onRequestZip, isError}) {

  const clickSearch = () => {
    const zipcode = document.getElementById("inputZipSearch").value;
    onRequestZip("/" + zipcode);
  }
  
  return (
    <div id="container">
      <div id="nav">
        <ul>
          <li className="siteLinks" page="home" onClick={onNavClick}>Home</li>
          <li className="siteLinks" page="universities" onClick={onNavClick}>Universities</li>
        </ul>
      </div>
      <div id="header">
        <h1>Duane Munro Launchpad React Code Challenge</h1>
      </div>
      <div id="content">
        <h1>US Postal Zip Code Lookup Page</h1>
        <input id="inputZipSearch" 
          type="number" 
          placeholder="search zip code"
        />
        <button id="btnSearch" onClick={() => clickSearch()}>Search</button>       
        <br></br>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Zip Code</th>
              <th>Name</th>
              <th>State</th>
              <th>Abbrev</th>
              <th>Longitude</th>
              <th>Latitude</th>
            </tr>
          </thead>
          {(isPending || isError) ? "" : <PostalItemList zipdata={zipdata}/>}
        </table>
      </div>  
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostalLookup);