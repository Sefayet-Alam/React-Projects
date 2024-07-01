export default function Fruit({ name, price, emoji }) {
  return (
    <>
      {/* {emoji} {name}  {price} */}
      
      {price>10?<li><h3>{emoji} {name}  {price}</h3> </li>:""}

    </>
  );
}
