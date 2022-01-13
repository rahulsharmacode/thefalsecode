import React from 'react'
import AboutData from './AboutData' 
import './about.css'

const Aboutus = () => {
    return (
        <><div className='aboutBox'>
            { 
                AboutData.map((e)=>{
                    return(<>

                            <div className='aboutcard'>
                            <h1>{e.title}</h1>
                            <p>{e.para}</p>
                            </div>

                    </>)
                })
            }
            </div>
        </>
        
    )
}

export default Aboutus
