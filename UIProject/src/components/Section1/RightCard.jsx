import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-80 relative overflow-hidden rounded-4xl'>
        <div>
            <img className=' w-full h-full object-cover ' src="https://images.unsplash.com/photo-1662483818646-c9cfbfeb0917?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-6 flex-col justify-between '></div>
            <h2>1</h2>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nam?</p>
              <button>Satisfied</button>
            </div>
        </div>
    </div>
  )
}

export default RightCard