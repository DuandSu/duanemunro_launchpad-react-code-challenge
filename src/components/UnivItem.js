
function UnivItem({alpha_two_code, domains, country, stateprovince, web_pages, name}) {
  return (
    <tr className="item">
      <td>{alpha_two_code}</td>
      <td>{domains}</td>
      <td>{country}</td>
      <td>{stateprovince}</td>
      <td>{web_pages}</td>
      <td>{name}</td>
    </tr>
  );
}

export default UnivItem;