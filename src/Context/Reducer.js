export const filterReducer =(filterState,action) =>{
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...filterState,
                wishlist: [...filterState.wishlist, action.payload]
            }
            case "REMOVE_FROM_WISHLIST":
            return {
                ...filterState,
                wishlist: [...filterState.wishlist.filter((prod)=>prod.id !== action.payload.id )]
            }
            case "FILTER_BY_BRAND":
            return{
                ...filterState, byBrand:[...filterState.byBrand, action.payload]
            }
            case "UNFILTER_BY_BRAND":
            return{
                ...filterState, byBrand:[...filterState.byBrand.filter((prod) => prod !== action.payload)]
            }
            case "FILTER_BY_PRICE":
            return{
                ...filterState, byPrice:[...filterState.byPrice, action.payload]
            }
            case "UNFILTER_BY_PRICE":
            return{
                ...filterState, byPrice:[...filterState.byPrice.filter((prod)=> prod !== action.payload)]
            }
            case "FILTER_BY_RATING":
            return{
                ...filterState, byRating:[...filterState.byRating, action.payload]
            }
            case "UNFILTER_BY_RATING":
            return{
                ...filterState, byRating:[...filterState.byRating.filter((prod)=> prod !== action.payload)]
            }
            case "FILTER_BY_SEARCH":
            return{
                ...filterState, bySearch:action.payload
            }
            

    
        default:
           return filterState;
    }
}