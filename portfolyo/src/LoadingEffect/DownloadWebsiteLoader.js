import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { LoaderName } from "react-awesome-loaders";
import { BoxesLoader } from "react-awesome-loaders";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { ScatterBoxLoader } from "react-awesome-loaders";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 999999,
        color: "#777",
    },
}));

const DownloadWebsiteLoader = () => {
  const classes = useStyles();
  const SpinnerV4 = useSelector((state) => state.SpinnerV4);
  return (
    <div
      className="DownloadWebsiteLoader"
      style={{ display: SpinnerV4 ? "inherit" : "none" }}
    >
            <Backdrop className={classes.backdrop} open={SpinnerV4}>
                <ScatterBoxLoader
                    color={"#3f51b5"}
                    // background={"var(--background)"}
                    background={"rgba(63, 81, 181,0.2)"}
                />
            </Backdrop>
    </div>
  );
};

export default DownloadWebsiteLoader;
