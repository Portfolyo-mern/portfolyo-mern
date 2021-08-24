import React, {  Component } from 'react';
// import AvatarEditor from 'react-avatar-editor';
import ImageCrop from './ImageCrop';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import './EditProfilePic.scss';
import axios from "axios";
import {Baseurl} from "../../../../App";
// import $ from 'jquery';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   input: {
//     display: 'none',
//   },
// }));



class EditProfilePic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userProfilePic: '',
      editor: null,
      scaleValue: 1,
      selectedImage: this.props.ProfilePicture
    };
  }

  setEditorRef = editor => this.setState({ editor });

  onCrop = async () => {
    const { editor } = this.state;
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      // console.log(this.state.userProfilePic);
      try{
        this.props.dispatch({ type: "spinner", payload: true });
        let result = await axios({
          url:`${Baseurl}/uploadbase64image`,
          method:"post",
          data:{token:localStorage.getItem("token"),image:url}
        });
        this.props.dispatch({ type: "spinner", payload: false });
        this.props.dispatch({ type: "profilepicture", payload: result.data });
        let deleteimage = this.state.userProfilePic;
        this.setState({ userProfilePic: result.data });
        result = await axios({
          url:`${Baseurl}/deletepublicid`,
          method:"post",
          data:{token:localStorage.getItem("token"),image:deleteimage}
        });
        // console.log(result.data);
      }catch(error){
        this.props.dispatch({ type: "spinner", payload: false });
      }
    }
  };

  onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseInt(scaleChangeEvent.target.value);
    this.setState({ scaleValue });
  };

  DataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  profilePicChange = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    if (!(type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg') || type.endsWith('gif'))) {
    } else {
      this.setState({ openCropper: true, selectedImage: fileChangeEvent.target.files[0], fileUploadErrors: [] });
    }
  }
  // myDropzone = new Dropzone("div#myId", { url: "/file/post"});
  render() {
    return (
      <div  style={{ width: "max-content" }}>
        <input
        className="disabledrag"
          accept="image/*"
          style={{ display: 'none', marginRight: "1rem" }}
          id="contained-button-file"
          // multiple
          name="profilePicBtn"
          // accept="image/png, image/jpeg"
          type="file"
          onChange={this.profilePicChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" className="disabledrag" style={{ display: "inline-block", marginRight: "1rem" }} color="primary" component="span"
          >
            Choose
        </Button>
        </label>
        <ImageCrop
          className="disabledrag"
          imageSrc={this.state.selectedImage}
          setEditorRef={this.setEditorRef}
          onCrop={this.onCrop}
          scaleValue={this.state.scaleValue}
          onScaleChange={this.onScaleChange}
        />

      </div>

    );
  }
}



export default connect(
)(EditProfilePic);