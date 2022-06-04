
function Item({userID, id, title, body}) {
  return (
    <tr className="item">
      <td>{userID}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
}

export default Item;