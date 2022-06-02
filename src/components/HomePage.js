import ItemList from './ItemList';

function HomePage({onNavClick}) {
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
          <ItemList/>  
        </table>
      </div>  
    </div>
  );
}

export default HomePage;