import { v4 as uuidv4 } from 'uuid';


export const setList  = (formData) => dispatch =>{
    formData.id = uuidv4();
    
    console.log(formData);
    dispatch({
        
        type: "SET_LIST",
        payload: formData
    })
}  

export const setSearchText = (text) => dispatch =>{
    dispatch({
        type:"SET_SEARCH_TEXT",
        payload:text
    })
}

export const delete_shop = (id) =>dispatch =>{
    dispatch({
        type:"DELETE_SHOP",
        payload:id
    })
}

