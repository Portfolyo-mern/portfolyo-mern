import React from "react";
import PropTypes from "prop-types";
import AvatarEditor from "react-avatar-editor";
import { Button } from "@material-ui/core";

const ImageCrop = ({
    imageSrc,
    onCrop,
    setEditorRef,
    scaleValue,
    onScaleChange,
    layoutp,
}) => (
    <div>
        <div className="editorOverlayInner">
            <div className="editorModalContent clearfix">
                <div className="cropCnt">
                    <AvatarEditor
                        image={imageSrc}
                        width={100}
                        height={100}
                        border={10}
                        scale={scaleValue}
                        rotate={0}
                        ref={setEditorRef}
                        className="cropCanvas disabledrag"
                        style={{
                            display: "block",
                            margin: "auto",
                        }}
                    />
                    <div
                        className="profileSectionBackgroundZoomDiv"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "1.3rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "1.2rem",
                                display: "block",
                                textAlign: "center",
                                margin: "1rem",
                            }}
                        >
                            Zoom:
                        </p>
                        <input
                            style={{
                                width: "50%",
                            }}
                            type="range"
                            value={scaleValue}
                            name="points"
                            min="1"
                            max="10"
                            onChange={onScaleChange}
                        />
                    </div>
                    <Button
                        onClick={onCrop}
                        variant="contained"
                        color="primary"
                        className="editorOverlayCloseBtn crpBtn"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

ImageCrop.propTypes = {
    open: PropTypes.bool.isRequired,
    setEditorRef: PropTypes.func.isRequired,
    onCrop: PropTypes.func.isRequired,
    scaleValue: PropTypes.number.isRequired,
    onScaleChange: PropTypes.func.isRequired,
};

export default ImageCrop;
