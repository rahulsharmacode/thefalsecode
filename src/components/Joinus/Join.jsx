import React from 'react'
import JoinusData from './JoinusData'
import './join.css'
import { useNavigate } from 'react-router-dom'


const Join = () => {

let navigate = useNavigate();

    return (
        <>
        <h1 className='joinhead'>How to Join Us</h1>
          <div className='join'>
              {JoinusData.map((e)=>{
                  return(<div className='joinbox'>
                
                  <i class={e.icon}></i>
                  <h2>{e.name}</h2>
                  <p>{e.discription}</p>
                  <button onClick={()=>{navigate(`/join/${e.id}`)}}>{e.btn}</button>
                

                  </div>)
              })}
          </div>  
        </>
    )
}

export default Join
