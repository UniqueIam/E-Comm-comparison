import { createContext, useEffect, useReducer,useContext } from "react";
import axios from 'axios';

const ProductContext = createContext();

const initialState={
 products:[],
 isError:false,
 singleProduct:{},
 isSingleError:false,
};

const reducer = (state,action) =>{
  
  switch (action.type) {   
    
      case "FETCH_DATA":
        return{
          ...state,
          products:action.payload,
        };

    case "API_ERROR":
        return{
          ...state,
          isError:true,
        }  

    case "SET_SINGLE_PRODUCT":
      return{
        ...state,
        singleProduct:action.payload,
      }    
    case "SINGLE_PRODUCT_ERROR":
      return{
         ...state,
         isSingleError:true,
      }  
    default:
      return state;
  }
}

const ProductProvider = ({children}) =>{

 const [state,dispatch] = useReducer(reducer,initialState);
 
  const fetchProducts = async()=>{

     try {
      const res = await axios.get('http://localhost:5000/products');
      const products =await res.data;
      console.log("Products Featured",products);
      dispatch({type:"FETCH_DATA", payload:products});
     } 
     catch (error) {
      console.log(error);
      dispatch({type:"API_ERROR"});
     }
  }

  const fetchSingleProduct = async () =>{

       try {
        const res = await axios.get("http://localhost:5000/products");
        const singleProduct = res.data;
        dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
       } catch (error) {
        dispatch({type:"SINGLE_PRODUCT_ERROR"});
       }
  };

  useEffect(()=>{
   fetchProducts();
  },[]);

  console.log(state);
  return(
    <ProductContext.Provider value={{...state,fetchSingleProduct}}>
      {children}
    </ProductContext.Provider>
  )
};

const useProductContext = () =>{
  return useContext(ProductContext);
};

export { ProductContext,ProductProvider,useProductContext };