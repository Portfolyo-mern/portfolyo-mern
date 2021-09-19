import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import Backdrop1 from "./Backdrop";

const LoadingEffect = () => {
    return (
        <div className="loading-effect">
            <Backdrop1/>
        </div>
    )
}

export default LoadingEffect
