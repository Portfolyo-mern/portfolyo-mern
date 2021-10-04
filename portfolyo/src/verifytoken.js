import React from "react";
import axios from "axios";
import {Baseurl} from "./App";
import {useHistory} from "react-router-dom";

const VerifyToken = (params) => {
    const token = params.match.params.token;
    const H = useHistory();
    React.useEffect(async ()=>{
        console.log(Baseurl);
        try{
            const result = await axios({
                method:"get",
                url:`${Baseurl}/verify/${token}`
            });
            if(result.data.status){
                alert(result.data.message);
                H.push("/signin");
            }else{
                alert(result.data.message);
                H.push("/signup");
            }
        }catch{
            alert("please check your internet connection and try again");
            H.push("/signup");
        }
    });
    return ""
}

export default VerifyToken;