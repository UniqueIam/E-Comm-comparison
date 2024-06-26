/* import { createContext, useContext, useEffect, useReducer } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],

}

export const FilterContextProvider=({children})=>{
    const {products} =<ProductDetails/>;


    const [state,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});},[products]
    );


    return (
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    );
};
export const useFilterContext=()=>{
    return useContext(FilterContext)
} */