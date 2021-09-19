import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookLoader } from "react-awesome-loaders";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 99999,
        color: "#fff",
    },
}));

const LoadingEffectV3 = () => {
  const classes = useStyles();
  const SpinnerV3 = useSelector((state) => state.SpinnerV3);
  return (
    <div
      className="LoadingEffectV3"
      style={{ display: SpinnerV3 ? "inherit" : "none" }}
    >
            <Backdrop className={classes.backdrop} open={SpinnerV3}>
            <BookLoader
                background={"linear-gradient(135deg, #6066FA, #3f51b5)"}
                desktopSize={"100px"}
                mobileSize={"80px"}
                textColor={"#3f51b5"}
            />
            </Backdrop>
    </div>
  );
};

export default LoadingEffectV3;
