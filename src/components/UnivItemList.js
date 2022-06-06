import UnivItem from './UnivItem';

function UnivItemList({universitydata}) {
  console.log("UnivItemList: ");
  let itemComponent = [];
  try {
    if (Array.isArray(universitydata)) {
      const sortedUD = universitydata.sort((a, b) => {
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
      itemComponent = sortedUD.map((univ, i) => {
        console.log("Map: " + univ.country);
        return (
            <UnivItem
                key={i} 
                alpha_two_code={univ.alpha_two_code}
                domains={univ.domains}
                country={univ.country}
                stateprovince={univ['state-province']}
                web_pages={univ.web_pages}
                name={univ.name}
            />
        )
      })
    }
  }
  catch {
    itemComponent.push (
      <tr className="item">
        <td>Universities NOT Found!</td>
      </tr>
    )
  }
  return (
    <tbody>
      {itemComponent}
    </tbody>
  );
}

export default UnivItemList;