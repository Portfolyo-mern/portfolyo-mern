const projectreducers = (val,section) => {
    return (state=val,action)=>{
        switch(action.type){
            case `PS_${section}`:return action.payload;
            case `${section}`: return action.payload;
            default:return state;
        }
    }
} 

export default projectreducers;