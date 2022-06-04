import PostalItem from './PostalItem';

function PostalItemList({zipData}) {
  let itemComponent = [];
  if (Array.isArray(zipData)) {
    itemComponent = zipData.map((prod, i) => {
      return (
          <PostalItem
              key={i} 
              zipCode={zipData['post code']}
              name={zipData.places[0]['place name']}
              state={zipData.places[0].state}
              sAbbrev={zipData.places[0]['state abbreviation']}
              long={zipData.places[0].longitude}
              lat={zipData.places[0].latitude}
          />
      )
    })
  }
  else {
    itemComponent.push (
      <PostalItem
        key="1" 
        zipCode={zipData['post code']}
        name={zipData.places[0]['place name']}
        state={zipData.places[0].state}
        sAbbrev={zipData.places[0]['state abbreviation']}
        long={zipData.places[0].longitude}
        lat={zipData.places[0].latitude}
      />
    )
  }

return (
    <tbody>
      {itemComponent}
    </tbody>
);
}

export default PostalItemList;