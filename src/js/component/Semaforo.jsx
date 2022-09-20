import React from "react";
import { useState } from "react";

const Semaforo = () => {
    const [color, setColor] = useState("");

    return(
        <div className="completo">
            <div id="cable"></div>
            <div id="semaforo">
                <div className={`red light ${color==="red"?'active': ''}`}
                onClick={() => {setColor("red")}}></div>
                <div className={`yellow light ${color==="yellow"?'active': ''}`}
                onClick={() => {setColor("yellow")}}></div>
                <div className={`green light ${color==="green"?'active': ''}`}
                onClick={() => {setColor("green")}}></div>
            </div>
        </div>
    )
}

export default Semaforo;