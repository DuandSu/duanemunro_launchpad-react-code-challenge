import React from 'react';
import c920 from '../scripts/fetch'
import UnivItemList from './UnivItemList';
import { connect } from 'react-redux';
import { requestUniversity } from '../actions';

const mapStateToProps = state => {
  return {
      universitydata: state.requestUniversity.universitydata,
      isPending: state.requestUniversity.isPending,
      isError: state.requestUniversity.isError,
      error: state.requestUniversity.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUniversity: (universityArg) => dispatch(requestUniversity(universityArg))
  }
}

class Universities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: null
    };
  }
  //
  // Had some issues trying to use the loaded country API data. I decided
  // to move to what I know better and used componentDidMount. I needed to get
  // the project working. I also justified it by the fact that only Universities
  // needs this data, and only the first time to load the select statement. I now
  // have plans to figure out my original problem later.
  //
  async componentDidMount () {
    const data = await this.getAllCountries();
    console.log("componentDidMount:");
    console.log(data.data[0]);
    const sortedCD = data.data.sort((a, b) => {
      let result;
      if (a.name < b.name) {
          result = -1;
      } else if (a.name > b.name) {
          result = 1;
      } else {
          result = 0;
      }
      return result;
    });
    const listItem = sortedCD.map((obj, i, arr) => {
      return (
        <option key={i} value={`${arr[i].name}`}>{`${arr[i].name}`}</option>
        // <option key={i} value={`src${arr[i].name}`.replace(/\s/g, '') }>{`${arr[i].name}`}</option>
      )
    });
    this.setState({
      listItem: listItem,
    });  
  }

  getAllCountries = async () => {
    const countryArg = "";
    const countryURL = "https://countriesnow.space/api/v0.1/countries/info?returns=none" + countryArg;
    const data = await c920.postData(countryURL);
    return data;
  }

  onChgSelectCountry = (e) => {
    console.log("onChgSelectCountry:");
    const countryPicked = e.target.value;
    console.log(e.target);
    if (countryPicked !== "srcSelect") {
      console.log("Country Picked: " + e.target.value);
      this.props.onRequestUniversity(countryPicked);
    }
  }
  
  render() {

    return (
      <div id="container">
        <div id="nav">
          <ul>
            <li className="siteLinks" page="home" onClick={this.props.onNavClick}>Home</li>
            <li className="siteLinks" page="postal" onClick={this.props.onNavClick}>Postal Lookup</li>
          </ul>
        </div>
        <div id="header">
          <h1>Duane Munro Launchpad React Code Challenge</h1>
        </div>
        <div id="content">
          <h1>Universities Page</h1>
          <br></br>
          <div className="divCitySelect">
            <label htmlFor="selectCountry">Country: </label>
            <select id="selectCountry" onChange={this.onChgSelectCountry}>
                <option value="srcSelect">Select Country</option>
                {this.state.listItem}
            </select>
          </div>
          <br></br>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>A2 Code</th>
                <th>Domain</th>
                <th>Country</th>
                <th>State/Prov</th>
                <th>Web Page</th>
                <th>Name</th>
              </tr>
            </thead>
            {(this.props.isPending || this.props.isError) ? "" : <UnivItemList universitydata={this.props.universitydata}/>}
          </table>
        </div>  
      </div>
    );
  }
}

// export default Universities;
export default connect(mapStateToProps, mapDispatchToProps)(Universities);