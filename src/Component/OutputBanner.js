import React from 'react'

function OutputBanner(props) {
   
  return (
    <div className='output'>
      <ol>
        {props.list.map((item,idx)=>{
            return <li key={idx}>
            <p className="text-monospace">{item}</p>
            <button className='btn btn-primary'>-</button>
            </li>
        })}
      </ol>
    </div>
  )
}

export default OutputBanner
