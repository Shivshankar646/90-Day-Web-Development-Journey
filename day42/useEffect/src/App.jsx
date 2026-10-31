import { useEffect, useState } from "react";

function App() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log(`${count}`)
  },[count])
  return(
    <div>
  <button onClick={() => setCount(count + 1)}>Click me</button>
  <p>{count}</p>
    </div>
  );
}

export default App;