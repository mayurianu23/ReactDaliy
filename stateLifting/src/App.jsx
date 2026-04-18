import React, { useState } from 'react'
import Card from './componets/card'
const App = () => {
//crate state manage state change state sabhi childe mai state ko sync karvadunga
  // const[name,setName] = useState('');
 const [count, setCount] = useState(0);
   

  return (
    <div>
      {/* <Card name={name} setName={setName} />
      <p>i am inside parent components and  value of name is {name} {name}</p> */}
        <h1>count:{count}</h1>
        <button onClick={()=> setCount(count + 1)}>increment</button>
    </div>
  )
}

export default App