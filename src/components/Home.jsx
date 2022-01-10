import React from 'react'
import Client from './client/Client'
import './innerCss/body.css'
import Join from './Joinus/Join'
import Servicemap2 from './servicefile/Servicemap2'





const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='hero'>
                    <h1>Welcome to The Fasle Code</h1>
                    <h3>A software based company</h3>


                    <div className='btnSection'>
                    <button className='btn1'>Get Started</button>
                    <button className='btn2'>Watch Videos</button>
                    </div>

                </div>


<Servicemap2/>


<Join/>

<Client/>


            </div>
        </>
    )
}

export default Home
