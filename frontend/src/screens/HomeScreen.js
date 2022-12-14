import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const reducer = (state,action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return{...state,loading:true};
    case 'FETCH_SUCCESS':
      return{...state, loading:false, products:action.payload}
    case 'FETCH_FAIL':
      return{...state, loading:false, error:action.payload}
      default:
        return state;
  }
}
const initialState = {
  products:[],
  loading:true,
  error:"",
}

const HomeScreen = () => {
  const [{loading,error,products},dispatch] = useReducer(reducer,initialState);

  useEffect(()=>{
    const fetchData = async ()=>{
      dispatch({type:'FETCH_REQUEST'});
      try{
        const result = await axios.get('/api/products');
        dispatch({type:'FETCH_SUCCESS',payload:result.data});
      }catch(err){
        dispatch({type:'FETCH_FAIL',payload:err.message});
      }
    }
    fetchData();
  },[])
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {
          loading ?(<div>Loading ...</div>) 
          :
          error ? (<div>{error}</div>)
          :(
        products.map((product) => {
          return (
            <div className="product" key={product.name}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to Cart</button>
              </div>
            </div>
          );
        }))}
      </div>
    </div>
  );
};

export default HomeScreen;
