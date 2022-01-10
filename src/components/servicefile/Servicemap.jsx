import {React, useState} from 'react'
import Sdata from './Sdata'
import './Scards.css'
import ServiceCommon from './ServiceCommon'
import {useNavigate } from 'react-router-dom'




const Servicemap = () => {

let navigate = useNavigate()


let Learn = (take) =>{
    console.log(take.title);
    <ServiceCommon title={'hii there'} />

}
    return (
        <>
            <div className='servicemap'>
                {
                    Sdata.map((val) => {
                        return (<div id={val.id} className='card'>
                        <img src={val.img} alt={val.topic} />
                            <p>{val.title}</p>
                            
                            <button onClick={()=>{Learn(val); navigate(`/services/${val.id}`)}}>Learn more</button>
                        </div>)
                    })
                }
            </div>



            
        </>


    )

}

export default Servicemap
