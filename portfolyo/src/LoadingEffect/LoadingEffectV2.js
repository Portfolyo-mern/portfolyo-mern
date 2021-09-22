import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoaderName } from "react-awesome-loaders";
import { BoxesLoader } from "react-awesome-loaders";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 99999,
        color: "#fff",
    },
}));

const LoadingEffectV2 = () => {
  const classes = useStyles();
  const SpinnerV2 = useSelector((state) => state.SpinnerV2);
  window.onbeforeunload = null;

  return (
    <div
      className="LoadingEffectV2"
      style={{ display: SpinnerV2 ? "inherit" : "none" }}
    >
            <Backdrop className={classes.backdrop} open={SpinnerV2}>
                <BoxesLoader
                    boxColor="#058541"
                    style={{ marginBottom: "20px" }}
                    desktopSize={"128px"}
                    mobileSize={"80px"}
                />
            </Backdrop>
    </div>
  );
};

export default LoadingEffectV2;
