import {React, useState} from 'react'
import Sdata from './Sdata'
import './Scards.css'
import ServiceCommon from './ServiceCommon'
import {useNavigate } from 'react-router-dom'




const Servicemap2 = () => {

let navigate = useNavigate()



    return (
        <>

        <h1 className='services_title'>Our Services</h1>
            <div className='servicemap2'>
                {
                    Sdata.map((val) => {
                        return (<div id={val.id} className='card2'>
                        <div className='innerCard'> 
                        <i class={val.icon}></i>
                        </div>
                        <div className='innerBlock'> 
                            <h3>{val.title}</h3>
                            <p>{val.discription}</p>
                            
                            <button onClick={()=>{navigate(`/services/${val.id}`)}}>Read More...</button>
                            </div>
                        </div>)
                    })
                }
            </div>



            
        </>


    )

}

export default Servicemap2
