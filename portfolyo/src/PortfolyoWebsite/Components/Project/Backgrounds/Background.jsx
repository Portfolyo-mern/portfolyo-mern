import React from 'react';
import Background1 from './Background1/Background1';
import Background2 from './Background2/Background2';
import Background3 from './Background3/Background3';
import Background4 from './Background4/Background4';
import {useSelector, useDispatch} from 'react-redux';

const Background = () => {
    let arr = [<Background1/>, <Background2/>, <Background3/>, <Background4/>,""];
    const projectbody = useSelector(state=>state.projectbody);
    return (
        <div>
            {
                arr[projectbody.background]
            }
        </div>
    )
}

export default Background;