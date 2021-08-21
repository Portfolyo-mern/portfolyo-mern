import React, {  Component } from 'react';
// import AvatarEditor from 'react-avatar-editor';
import ImageCrop from './ImageCrop';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import './EditImage.scss';
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



class EditImage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userProfilePic: '',
      editor: null,
      scaleValue: 1
    };
  }

  setEditorRef = editor => this.setState({ editor });

  onCrop = () => {
    const { editor } = this.state;
    if (editor !== null) {
      try{
        const url = editor.getImageScaledToCanvas().toDataURL();
        let arr = [...this.props.card1edu];
        arr[this.props.editcardine.index]["image"]=url;
        // console.log(arr);
        this.props.dispatch({type:"card1edu",payload:arr});
        this.setState({ userProfilePic: "" });
      }
      catch{

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
      <div className="disabledrag" style={{ width: "max-content" }}>
        <input
          accept="image/*"
          style={{ display: 'none', marginRight: "1rem" }}
          id="contained-button-file"
          // multiple
          name="profilePicBtn" 
          type="file"
          onChange={this.profilePicChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" style={{ display: "inline-block", marginRight: "1rem" }} color="primary" component="span"
          >
            Edit
        </Button>
        </label>
        <ImageCrop
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

const mapStateToProps = state => {
        return {
          editcardine:state.editcardine,
          card1edu:state.card1edu
        };
      };

export default connect(mapStateToProps
)(EditImage);
