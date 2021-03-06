import React from "react";
import PropTypes from "prop-types";
import AvatarEditor from "react-avatar-editor";
import Button from "@material-ui/core/Button";
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import Dropzone from 'react-dropzone';

const ImageCrop = ({
    imageSrc,
    onCrop,
    setEditorRef,
    scaleValue,
    onScaleChange,
}) => (
    <>
        <Button
            variant="contained"
            className="mb-3 ml-3 bg-dark text-white"
            style={{
                display: "inline-block",
                position: "relative",
                top: "9px",
            }}
            onClick={onCrop}
            component="span"
        >
            Save
        </Button>
        <div className="editorOverlayInner">
            <div className="editorModalContent clearfix">
                <div className="cropCnt">
                    <AvatarEditor
                        image={imageSrc}
                        border={15}
                        style={{ height: "14rem", width: "14rem" }}
                        scale={scaleValue}
                        rotate={0}
                        ref={setEditorRef}
                        className="cropCanvas"
                    />
                    <div
                        className="profilePicZoomDiv"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <p style={{ margin: "1rem"}}>Zoom: </p>
                        <input
                            style={{ width: "100%" }}
                            class="custom-range"
                            type="range"
                            value={scaleValue}
                            name="points"
                            min="1"
                            max="10"
                            step={1}
                            onChange={onScaleChange}
                        />
                    </div>
                    {/* <button onClick={onCrop} className="editorOverlayCloseBtn crpBtn">
              Save
            </button> */}
                </div>
            </div>
        </div>
    </>
);

ImageCrop.propTypes = {
    open: PropTypes.bool.isRequired,
    setEditorRef: PropTypes.func.isRequired,
    onCrop: PropTypes.func.isRequired,
    scaleValue: PropTypes.number.isRequired,
    onScaleChange: PropTypes.func.isRequired,
};

export default ImageCrop;
