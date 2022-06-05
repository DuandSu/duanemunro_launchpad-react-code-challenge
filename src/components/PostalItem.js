
function PostalItem({zipCode, name, state, sAbbrev, long, lat}) {
  return (
    <tr className="item">
      <td>{zipCode}</td>
      <td>{name}</td>
      <td>{state}</td>
      <td>{sAbbrev}</td>
      <td>{long}</td>
      <td>{lat}</td>
    </tr>
  );
}

export default PostalItem;