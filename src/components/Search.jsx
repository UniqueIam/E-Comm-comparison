/* import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search=({history})=>{
    const [keyword,setKeyword]=useState('');


    const searchHandler=(e)=>{
        e.preventDefault()


        if(keyword){
            history.push(`/search/${keyword}`)
        }else{
            history.push('/')
        }
    }
    return(
        
        <form onsubmit={searchHandler}>
            <div className="input">
            <input 
            type='text'
            placeholder='What are you looking for ?'
            id='search'
            onChange={(e)=>setKeyword(e.target.value)}
          />
          <div>
          <button><CiSearch id='search-icon' /></button>
          </div>
            </div>
        </form>
    )
    
}

export default Search */