import ItemList from './ItemList';

function HomePage() {
    return (
      <div id="container">
        <div id="header">
          <h1>Duane Munro Launchpad React Code Challenge</h1>
        </div>
        <div id="content">
          <h1>Home Page - CRUD Operations</h1>
          <div id="nav">
            <ul>
              <a href="https://nulifenutritionyyc.ca/cannabis/">
                <li className="siteLinks">Universities</li>
              </a>
              <a href="https://nulifenutritionyyc.ca/cannabis/">
                <li className="siteLinks">Postal Lookup</li>
              </a>
            </ul>
          </div>
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