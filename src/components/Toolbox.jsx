import React from 'react'
import TextMovement from '../components/TextMovement'
import TextMovementReverse from '../components/TextMovementReverse'


const Toolbox = () => {      
  return (
    <div className="toolbox" style={{ backgroundColor: '#040b10' }}>
        <div className='container text-center'>
            <h1 className='' style={{ fontSize: '55px', fontWeight: '700', color: 'rgb(127, 127, 127)' }}>My toolbox & <br /> Things I can do</h1>                                                  
        </div>
        <TextMovement />
        <TextMovementReverse />
    </div>
  )
}

export default Toolbox