export const addNumbers = (data1,data2) => {
    return(dispatch)=>{
        dispatch({
            type:"Add",
            payload:{data1,data2}
        })
    }
}

export const subtractNumbers = (data1,data2) => {
    return(dispatch)=>{
        dispatch({
            type:"Subtract",
            payload:{data1,data2}
        })
    }
}

export const multiplyNumbers = (data1,data2) => {
    return(dispatch)=>{
        dispatch({
            type:"Multiply",
            payload:{data1,data2}
        })
    }
}

export const divideNumbers = (data1,data2) => {
    return(dispatch)=>{
        dispatch({
            type:"Divide",
            payload:{data1,data2}
        })
    }
}