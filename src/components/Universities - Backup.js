import React, { useEffect, useState, unsubscribeOrRemoveEventHandler } from 'react';
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

function Universities({ onNavClick }) {

  // const [countryData, setCountryData] = useState(null);
// function Universities({onNavClick, countrydata, isPending, onRequestCountry, isError}) {
// async function Universities({onNavClick, countrydata, isPending, onRequestCountry, isError}) {

  // let data = null;
  // useEffect(()  => {
    // onRequestCountry("");
    // console.log("Universities:useEffect: countryData = ");
    // console.log(countrydata);
    // console.log(countrydata.data[0].name);
    // const listItem = countrydata.data.map((obj, i, arr) => {
    //   return (
    //     <option key={i} value={`src${arr[i].name}`.replace(/\s/g, '') }>{`${arr[i].name}`}</option>
    //   )
    // });
    // let data = getAllCountries();
    // console.log(data);
  // }, []);

  useEffect(() => {
    // (async () => {
    //   const data = await getAllCountries();
    //   setCountryData(data);
    //   console.log("useEffectAsync: ");
    //   console.log(data.data[0]);
    // })()

    // return () => {
    //   unsubscribeOrRemoveEventHandler()
    // }
  }, [])

  const getAllCountries = async () => {
    const countryArg = "";
    const countryURL = "https://countriesnow.space/api/v0.1/countries/info?returns=none" + countryArg;
    const data = await c920.postData(countryURL);
    console.log("getAllCountries:")
    console.log(data.data[0]);
    return data;
  }

  const onChgSelectCountry = (e) => {
    const ignore = true;
  }
    console.log("Main: ");
    const countryData = (async () => {
      const cData = await getAllCountries();
      // setCountryData(data);
      console.log(cData.data[0]);
      return cData;
    })()

  console.log(countryData.data);
  // const listItem = countryData.data.map((obj, i, arr) => {
  //   return (
  //       <option key={i} value={`src${arr[i].name}`.replace(/\s/g, '') }>{`${arr[i].name}`}</option>
  //   )
  // });
  // console.log(listItem[0]);
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
          <div className="divCitySelect">
            <label htmlFor="selectCountry">Country: </label>
            <select id="selectCountry" onChange={onChgSelectCountry}>
                <option value="srcSelect">Select Country</option>
                {/* {listItem} */}
            </select>
          </div>
        </div>  
      </div>
  );
}

export default Universities;
// export default connect(mapStateToProps, mapDispatchToProps)(Universities);