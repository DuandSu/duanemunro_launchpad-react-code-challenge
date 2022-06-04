
function Item({userId, id, title, body}) {
  return (
    <tr className="item">
      <td>{userId}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
}

export default Item;