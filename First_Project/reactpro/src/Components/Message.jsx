

export default function Message() {
    function handleClick(){
        console.log("Button Clicked");
    }
  return (
    <div>
      <button onClick={handleClick}>Click Here to get msg</button>
    </div>
  );
}
