  import React, { useState } from 'react'
  import { useEffect } from 'react';
  
  const UseeffectHook = () => {
    const[count, setCount] = useState(0);
    const[total, setTotal]= useState(0);


   //Variation 1
   //It run on every render
    // useEffect(() => {
    //   alert("hiii");
    // })

   //variation 2
   //run on only first render
//    useEffect(() => {
//   alert('I will run on only first render');
  
//    }, [])
   
 

//variation3
// useEffect(() => {
//   alert('i will run every time when count is updated');
// }, [count])


//variation n4
//multipal dependencies
// useEffect(() => {
//   alert('i will run on every hen count/total is updated');
// }, [count,total])

//variation 5
//is barr lets add clean up function
useEffect(() => {
  alert("count is updated");

  return () => {
    alert("count is unmounted from UI");
  }
}, [count])


 
      function handelClick(){
        setCount(count + 1);

      }
      function handelClicktotal(){
               setTotal(count);
      }



    return (
      <div>
        <button onClick={handelClick}>update</button>
        <h1>count is : {count}</h1>
        <br />
          <button onClick={handelClicktotal}>total</button>
        <h1>total is :{total}</h1>
      </div>
    )
  }
  
  export default UseeffectHook