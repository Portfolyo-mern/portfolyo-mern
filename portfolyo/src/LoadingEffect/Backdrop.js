import React from 'react';
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 99999,
        color: "#fff",
    },
}));

const Backdrop1 = () => {
  window.onbeforeunload = null;
    const classes = useStyles();
    const Spinner = useSelector((state) => state.Spinner);
    return (
        <div className="Backdrop">
            <Backdrop className={classes.backdrop} open={Spinner}>
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    )
}

export default Backdrop1;
