import React from 'react'
import { useParams } from 'react-router-dom'
import JoinusData from './JoinusData';
import './join.css'

const Joinus = () => {

    const {idjoin} = useParams();

    return (
        <div className='joinus'>
           <h1>looking for {JoinusData[idjoin].name} ?</h1>
           <p>We are under construction now!!!</p>
        </div>
    )
}

export default Joinus
