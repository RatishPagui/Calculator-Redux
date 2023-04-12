const reducer = (state = 0 , action) => {
    if(action.type === "Add"){
        return action.payload.data1 + action.payload.data2;
    }
    else if(action.type === "Subtract"){
        return action.payload.data1 - action.payload.data2;
    }
    else if(action.type === "Multiply"){
        return action.payload.data1 * action.payload.data2;
    }
    else if(action.type === "Divide"){
        return action.payload.data1 / action.payload.data2;
    }
    else{
        return state;
    }
}

export default reducer;
