import PostalItem from './PostalItem';

function PostalItemList({zipdata}) {
  let itemComponent = [];
  try {
    if (!Array.isArray(zipdata)) {
      itemComponent.push (
        <PostalItem
          key="1"
          zipCode={zipdata['post code']}
          name={zipdata.places[0]['place name']}
          state={zipdata.places[0].state}
          sAbbrev={zipdata.places[0]['state abbreviation']}
          long={zipdata.places[0].longitude}
          lat={zipdata.places[0].latitude}
        />
      )
    }
  }
  catch {
    itemComponent.push (
      <tr className="item">
        <td>Zip Code NOT Found!</td>
      </tr>
    )
  }
  return (
    <tbody>
      {itemComponent}
    </tbody>
  );
}

export default PostalItemList;