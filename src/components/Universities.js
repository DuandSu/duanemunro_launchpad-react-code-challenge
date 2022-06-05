import { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestCountry } from '../actions';

const mapStateToProps = state => {
  return {
      countrydata: state.requestCountry.countrydata,
      isPending: state.requestCountry.isPending,
      isError: state.requestCountry.isError,
      error: state.requestCountry.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestCountry: (countryArg) => dispatch(requestCountry(countryArg))
  }
}

function Universities({onNavClick, countrydata, isPending, onRequestCountry, isError}) {

  useEffect(() => {
    onRequestCountry("");
  }, []);

    console.log("Universities: countryData = ");
    console.log(countrydata);

    return (
      <div id="container">
        <div id="nav">
          <ul>
            <li className="siteLinks" page="home" onClick={onNavClick}>Home</li>
            <li className="siteLinks" page="postal" onClick={onNavClick}>Postal Lookup</li>
          </ul>
        </div>
        <div id="header">
          <h1>Duane Munro Launchpad React Code Challenge</h1>
        </div>
        <div id="content">
          <h1>Universities Page</h1>
          <br></br>
        </div>  
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Universities);