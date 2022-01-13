import React from "react";
import { useParams } from "react-router-dom";
import Sdata from "./Sdata";
import "./servicecommon.css";

const ServiceCommon = () => {
  const { idkey } = useParams();

  return (
    <>
      <div className="servicecommon">
        {/* {console.log(Sdata[idkey])}

                <img src={Sdata[idkey].img} />
                <h1>{Sdata[idkey].title}</h1>
                <p>{Sdata[idkey].discription}</p> */}

        <div className="serviceName">
          <h1>{Sdata[idkey].title}</h1>
        </div>
        <div className="ServiceComCard">
          <div className="SCC_para">
            <h4 style={{color:'rgb(47, 47, 177)', marginBottom:'2rem'}}>{Sdata[idkey].title}</h4>
            <p>{Sdata[idkey].discription}</p>
          </div>
          <div className="SCC_img">
            <img src={Sdata[idkey].img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCommon;
