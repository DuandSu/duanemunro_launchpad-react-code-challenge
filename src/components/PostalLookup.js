import { connect } from 'react-redux';
import PostalItemList from './PostalItemList';

import { requestZip } from '../actions';

const mapStateToProps = state => {
  return {
      zipdata: state.requestZip.zipdata,
      isPending: state.requestZip.isPending,
      error: state.requestZip.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestZip: (zipArg) => dispatch(requestZip(zipArg))
  }
}
function PostalLookup({onNavClick, zipdata, isPending, onRequestZip}) {
  const zipcode = "90210";
  // const clickSearch = (e, zipcode) => {
    onRequestZip("/" + zipcode);
  // }
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
            <PostalItemList zipData={zipdata}/>  
          </table>
        </div>  
      </div>
    );
}

// export default PostalLookup;
export default connect(mapStateToProps, mapDispatchToProps)(PostalLookup);