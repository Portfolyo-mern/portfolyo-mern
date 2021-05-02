import React from 'react';
import FontPicker from "font-picker-react";
import { useSelector, useDispatch } from 'react-redux';



const FontPick = () => {
    const fontfamilyedu = useSelector(state=>state.fontfamilyedu);
    const dispatch = useDispatch();
    return (
        <div>
              <div className="profileSectionEditorFontPickerDiv disabledrag">
                    <FontPicker
                        className="profileSectionEditorFontpicker"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={fontfamilyedu.description}
                        onChange={(nextFont) =>  dispatch({ type: "fontfamilyedu",payload:{...fontfamilyedu,descripition:nextFont.family}})
                        }
                    />
                    
                </div>
        </div>
    )
}

export default FontPick
