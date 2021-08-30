const projectreducers = (val,section) => {
    return (state=val,action)=>{
        switch(action.type){
            case `PS_${section}`:return action.payload;
            case "projectheader": return action.payload;
            case "projectcard": return action.payload;
            case "projectbody": return action.payload;
            case "addproject": return action.payload;
            case "currenttabpro": return action.payload;
            case "projectlayout": return action.payload;
            case "editproject": return action.payload;
            case "projectcustom": return action.payload;
            case "editallproject":return action.payload; 
            default:return state;
        }
    }
} 

export default projectreducers;