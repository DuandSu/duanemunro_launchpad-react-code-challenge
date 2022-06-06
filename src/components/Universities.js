import React from 'react';
import c920 from '../scripts/fetch'
// import { connect } from 'react-redux';
// import { requestCountry } from '../actions';

// const mapStateToProps = state => {
//   return {
//       countrydata: state.requestCountry.countrydata,
//       isPending: state.requestCountry.isPending,
//       isError: state.requestCountry.isError,
//       error: state.requestCountry.error
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onRequestCountry: (countryArg) => dispatch(requestCountry(countryArg))
//   }
// }

class Universities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: null
    };
  }

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
        <option key={i} value={`src${arr[i].name}`.replace(/\s/g, '') }>{`${arr[i].name}`}</option>
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
    const ignore = true;
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
        </div>  
      </div>
    );
  }
}

export default Universities;
// export default connect(mapStateToProps, mapDispatchToProps)(Universities);