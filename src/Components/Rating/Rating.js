import { AiFillStar } from "react-icons/ai";
import {BiStar} from "react-icons/bi"
import "./Rating.css"


const Rating = ({rating}) => {

  return (
    <div 
     className="rating">
      {[...Array(5)].map((_, i) => {
        return <span key ={i} >{rating > i ? <AiFillStar /> : <BiStar/>}</span>;
      })}
    </div>
  );
};

export default Rating;
