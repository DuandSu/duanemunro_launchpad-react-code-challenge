import Item from './Item';

function ItemList({postdata}) {
  console.log(postdata);
  let itemComponent = [];
  if (Array.isArray(postdata)) {
    itemComponent = postdata.map((prod, i) => {
      return (
          <Item
              key={i} 
              userID={postdata[i].userID} 
              id={postdata[i].id}
              title={postdata[i].title}
              body={postdata[i].body}
          />
      )
    })
  }
  else {
    itemComponent.push (
      <Item
      key="1" 
      userID={postdata.userID} 
      id={postdata.id}
      title={postdata.title}
      body={postdata.body}
      />
    )
  }

return (
    <tbody>
      {itemComponent}
    </tbody>
);
}

export default ItemList;