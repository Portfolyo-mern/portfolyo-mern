import React from 'react'
import "./Background2.scss";
const Background2 = () => {
    let a=[];
    for(var i=0;i<50;i++){
        a.push(i);
    }
    return (
        <div className="Background2">
            {
                a.map((index,ele)=>(
                    <div className="firefly">
                    </div>
                ))
            }
        </div>
    )
}

export default Background2
