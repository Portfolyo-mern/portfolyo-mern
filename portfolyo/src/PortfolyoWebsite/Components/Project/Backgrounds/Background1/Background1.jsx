import React from 'react'

const Background1 = () => {
    let a = [];
    for (var i = 0; i <100; i++) {
        a.push(i);
    }
    return (
        <div className="Background1">
            {
                a.map((ele, index) => (
                    <div className="circle-container">
                        <div className="circle" />
                    </div>
                ))
            }
        </div>
    )
}

export default Background1
