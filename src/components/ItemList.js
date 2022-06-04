import Item from './Item';

function ItemList({postdata}) {
  let itemComponent = [];
  if (Array.isArray(postdata)) {
    itemComponent = postdata.map((prod, i) => {
      return (
          <Item
              key={i} 
              userId={postdata[i].userId} 
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
      userId={postdata.userId} 
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