import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { LoaderName } from "react-awesome-loaders";
import { BoxesLoader } from "react-awesome-loaders";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { ScatterBoxLoader } from "react-awesome-loaders";
import CreateIcon from '@material-ui/icons/Create';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 2147483647,
        color: "#000",
        background:"#fff"
    },
}));

const DownloadWebsiteLoader = () => {
  const classes = useStyles();
  const SpinnerV4 = useSelector((state) => state.SpinnerV4);
  window.onbeforeunload = null;

  return (
    <div
      className="DownloadWebsiteLoader"
      style={{ display: SpinnerV4 ? "inherit" : "none",zIndex:2147483647 }}
    >
            <Backdrop className={classes.backdrop} open={SpinnerV4}>
              <div style={{position:"absolute",top:50,width:"max-content"}}>
                <p className="text-center text-capitalize mb-2" style={{
                  color:"#3f50b5",
                  fontSize:"26px",
                  "fontFamily":  "Roboto",
                  fontWeight:"550"
                }}>your website is preparing please wait </p>
              <LinearProgress  style={{margin:"1rem 7px 0 7px"}}/>
                {/* <p className="mt-0" style={{
                  color:"#3f50b5",
                  fontSize:"26px"
                }}
                className="text-center"
              >...</p> */}
              </div>
                <ScatterBoxLoader
                    primaryColor={"#3f50b5"}
                    background={"#fff"}
                    // background={"rgba(63, 81, 181,0.2)"}
                />
            </Backdrop>
    </div>
  );
};

export default DownloadWebsiteLoader;
