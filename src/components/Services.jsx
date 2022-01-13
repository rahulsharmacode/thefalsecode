import React from "react";
import Servicemap from "./servicefile/Servicemap";
import './innerCss/services.css'
let Services = () =>{



    return(
        <>
           <div className="services">
               <h1 className="serviceshead">Services</h1>
               <h4>In the new world, the companies that build, learn, and evolve the fastest will win.</h4>
               <p>Our people and processes are built for speed of iteration and innovation. We use world-class product engineering and lean methodologies to transform businesses, launch startups, leverage AI, and produce new paradigms of Healthcare and Education.</p>
           <img className="servman" src="https://freepngimg.com/save/63964-distance-business-rocket-sitting-vector-education-man/800x525" alt="ser" />
              

           </div>
           <Servicemap/>
        </>
    )
}


export default Services