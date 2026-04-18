import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      
    <Card user='Mayuri' age={24} img='https://images.unsplash.com/photo-1768479397383-49806c934167?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
     <Card user='Annu' age={23} img='https://images.unsplash.com/photo-1774991061995-9bef4c333de4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

    </div>

    
  )
}

export default App