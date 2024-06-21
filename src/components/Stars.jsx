import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import './Stars.css'

const Stars = ({stars}) =>{
    console.log("My stars are:",stars);
    const ratingStar = Array.from({length:5},(ele,index)=>{
       let number = index+0.5;

       return(
        <span key={index}>
                {
                    stars>=index+1 
                    ? <FaStar className="stars-icon"/>
                    : stars >= number 
                    ? <FaStarHalfAlt className="stars-icon"/>
                    : <AiOutlineStar className="stars-icon"/>
                }
        </span>
       )
    })
  return(
   <>
      
      {ratingStar}
   
   </>
  )
}

export default Stars;
