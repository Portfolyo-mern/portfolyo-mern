import React, { Component } from "react";
import ImageCrop from "./ImageCrop";
import { connect } from "react-redux";
import axios from "axios";
import {Baseurl} from "../../../App"

class AvatarCrop extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
            skillCardImage: "",
            editor: null,
            scaleValue: 5,
            editCard: props.editCard,
			userProfilePic: '',
        };
	}

	handleDrop = (dropped) => {
		this.setState({ skillCardImage: dropped[0] });
	};

	setEditorRef = (editor) => this.setState({ editor });

	onCrop = async () => {
		const { editor } = this.state;
		if (editor !== null) {
			const url = editor.getImageScaledToCanvas().toDataURL();
			// console.log(url);
			try{
				this.props.dispatch({ type: "spinner", payload: true });
				let result = await axios({
				  url:`${Baseurl}/uploadbase64image`,
				  method:"post",
				  data:{token:localStorage.getItem("token"),image:url}
				});
				this.props.dispatch({ type: "spinner", payload: false });
				this.props.dispatch({
					type: "skillCradImageChange",
					payload: result.data,
                    editCard: this.state.editCard,
                });
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
		const scaleValue = parseFloat(scaleChangeEvent.target.value);
		// console.log(scaleValue);
		this.setState({ scaleValue });
	};

	DataURLtoFile = (dataurl, filename) => {
		let arr = dataurl.split(","),
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
		if (
			!(
				type.endsWith("jpeg") ||
				type.endsWith("png") ||
				type.endsWith("jpg") ||
				type.endsWith("gif")
			)
		) {
		} else {
			this.setState({
				openCropper: true,
				selectedImage: fileChangeEvent.target.files[0],
				fileUploadErrors: [],
			});
		}
	};
	render() {
		return (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    overflowX: "scroll",
                }}
            >
                <input
                    type="file"
                    name="profilePicBtn"
                    accept="image/png, image/jpeg"
                    onChange={this.profilePicChange}
                    style={{
                        display: "block",
                        margin: "2rem auto",
                    }}
                />
                {/* <p>{this.state.layoutp}s</p> */}
                <ImageCrop
                    layoutp={this.state.layoutp}
                    imageSrc={this.state.selectedImage}
                    setEditorRef={this.setEditorRef}
                    onCrop={this.onCrop}
                    scaleValue={this.state.scaleValue}
                    onScaleChange={this.onScaleChange}
                    handleDrop={this.handleDrop}
                    editCard={this.state.editCard}
                />

                {/* <img src={this.state.skillCardImage} alt="Profile" /> */}
            </div>
        );
	}
}

export default connect()(AvatarCrop);
