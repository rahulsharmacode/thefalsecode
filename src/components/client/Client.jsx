import React from 'react'
import './client.css'
import ClientData from './ClientData'

const Client = () => {
    return (
        <>

<h1 className='clienthead'>We are in touch with</h1>

          <div className='client'>

            <div className='cilentlogo'>
              {
                ClientData.map((e)=>{
                  return(<>
                  <div className='logo'>
                    <img src={e.img} alt={e.name} />
                    </div>
                  </>)
                })
              }
            </div>
          </div>  
        </>
    )
}

export default Client
