import Item from './Item';

function ItemList({postdata}) {

  const itemComponent = postdata.map((prod, i) => {
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

return (
    <tbody>
      {itemComponent}
    </tbody>
);
}

export default ItemList;