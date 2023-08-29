import React from 'react'

function OutputBanner(props) {
   
  return (
    <div className='output'>
      <ol>
        {props.list.map((item,idx)=>{
            return <li key={idx}>
            <p>{item}{idx}</p>
            <button>-</button>
            </li>
        })}
      </ol>
    </div>
  )
}

export default OutputBanner
