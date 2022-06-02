function PostalLookup({onNavClick}) {
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
          <h1>Postal Lookup Page</h1>
          <br></br>
        </div>  
      </div>
    );
}

export default PostalLookup;