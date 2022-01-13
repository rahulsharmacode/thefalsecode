import {React} from 'react'
import Sdata from './Sdata'
import './Scards.css'
import {useNavigate } from 'react-router-dom'




const Servicemap = () => {

let navigate = useNavigate()

    return (
        <>
            <div className='servicemap'>
                {
                    Sdata.map((val) => {
                        return (<div id={val.id} className='card'>
                        {(val.id % 2 == 0) ? (<><img src={val.img} alt={val.topic} />
                        <div className='Sblock'> 
                            <h1 style={{color:'orange' , fontSize: '45px'}}>{val.title}</h1>
                            <p>{val.discription}</p>
                            
                            <button onClick={()=>{navigate(`/services/${val.id}`)}}>Learn more <i class="fas fa-chevron-circle-right"></i></button>
                            </div> </>) :
                            
                        (<>
                        <div className='Sblock'> 
                            <h1 style={{color:'orange' , fontSize: '45px'}}>{val.title}</h1>
                            <p>{val.discription}</p>
                            
                            <button onClick={()=>{navigate(`/services/${val.id}`)}}>Learn more <i class="fas fa-chevron-circle-right"></i></button>
                            </div> 
                            <img src={val.img} alt={val.topic} />
                            </>)
                            

                            
                            }
                        
                        </div>)
                    })
                }
            </div>



            
        </>


    )

}

export default Servicemap
