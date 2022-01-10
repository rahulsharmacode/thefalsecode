import React from 'react'
import { useParams } from 'react-router-dom'
import Sdata from './Sdata';
import './servicecommon.css'

const ServiceCommon = () => {

    const {idkey} = useParams();

    return (
        <>
            <div className='servicecommon'>


                {console.log(Sdata[idkey])}

                <img src={Sdata[idkey].img} />
                <h1>{Sdata[idkey].title}</h1>
                <p>{Sdata[idkey].discription}</p>


                

            </div>
        </>
    )
}

export default ServiceCommon
