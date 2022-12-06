const initialState = {
        shopList:[],
        search:{
            searchText:"",
            searchField:'shopName'
        },
        loading:false
}

export default (state=initialState, action) => {
    console.log("out reducer ran")
    const {type, payload} = action;
    switch (type) {
        case "SET_LIST":
            console.log("reducer ran")
            return{
                ...state,
                shopList:[payload, ...state.shopList],
             
            }
        case "SET_SEARCH_TEXT":
            return{
                ...state,
                search:payload

            }    
        
        case "DELETE_SHOP":
            return{...state, shopList:  state.shopList.filter((shop)=>{
              return  shop.id !== payload
            })   }
        default:
            return state
    }

}
