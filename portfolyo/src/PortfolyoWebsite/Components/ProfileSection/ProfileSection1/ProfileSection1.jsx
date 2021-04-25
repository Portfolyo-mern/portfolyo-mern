import React, {useState, useRef} from 'react';
import "./ProfileSection1.scss";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Particles from "react-tsparticles";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
    cam_icon: {
        color: "red",
        marginLeft: "auto",
        marginTop: "auto !important"
    },
});

//profileSection1

const ProfileSection1 = (props) => {

    const inputRef = useRef();

    const triggerImageInput = () => {
      inputRef.current.click();
    }

    const [userName, setuserName] = useState("Deepesh Dragoneel");
    const [tagLine, settagLine] = useState("oisadhfsdjfnxkjchaiufhdsifhasfhdkjafhlksfjhalkfhaksdjfhnkasjfhaklsfhaslkfhsadfaksjdfhasklfhdsflakfjlksdfhasklfjf");
    const [address, setaddress] = useState("Hyderabad, Telangana, India");
    const classes = useStyles(props);
    return (
      <div className="profileSection1Component">
        <div className="profileSection1Background">
          <CameraAltIcon
            style={{
              fontSize: "2rem",
              color: "black",
              border: "white 1px solid",
              borderRadius: "100%",
              padding: "4px",
              backgroundColor: "white",
              cursor: "pointer",
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
            }}
          />
        </div>
        <div className="profileSection1ProfilePhoto">
          {/* <img src="https://media-exp1.licdn.com/dms/image/C5603AQEYwXGYgyWqMQ/profile-displayphoto-shrink_200_200/0/1600838188632?e=1624492800&v=beta&t=gFM_cnhyS775UrQ68xVAVq6ptYBHV8z5a00R8LsMTus"></img> */}
          <input type="file" accept="image/*" style={{
            display: "none"
          }} ref={inputRef}></input>
          <i class="fas fa-user-tie" onClick={triggerImageInput}></i>
        </div>
        <div className="profileSection1Details">
          <CreateIcon style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            cursor: "pointer"
          }}
          onClick={props.edit}/>
          <div className="profileSection1Text">
            <h2 className="profileSection1Texth2">{userName}</h2>
            <p className="profileSection1Textp1">{tagLine}</p>
            <p className="profileSection1Textp2">{address}</p>
          </div>
          <div className="profileSection1Buttons">
            <Button
              variant="contained"
              color="primary"
              style={{
                margin: "10px",
              }}
            >
              Hire Me
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{
                margin: "10px",
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    );
}

export default ProfileSection1;
