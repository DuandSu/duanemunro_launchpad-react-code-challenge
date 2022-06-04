import PostalItemList from './PostalItemList';

function PostalLookup({onNavClick}) {
  const zipData = {"post code": "90210", "country": "United States", "country abbreviation": "US", "places": [{"place name": "Beverly Hills", "longitude": "-118.4065", "state": "California", "state abbreviation": "CA", "latitude": "34.0901"}]}
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
          <h1>Postal US Zip Code Lookup Page</h1>
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
            <PostalItemList zipData={zipData}/>  
          </table>
        </div>  
      </div>
    );
}

export default PostalLookup;