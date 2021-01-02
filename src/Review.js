import { React } from "react";
import star from './img/star.jpg';
import FDate from "./utils/FDate";


const Review = ({reviews}) => {

    const rw = reviews.map( review => {           
   
      let tmp = [];
      for (let i = 0; i < review.stars; i++) {
        tmp.push(i);
      }

      const stars = tmp.map(function (i) {
        return (
          <img src={star} alt="star" width="3%" height="3%" />
        );
      });

    
        return( <div>
         
                    <table>
                      <tr>
                        <td colSpan="2" ><span className='tdcaption' >Reviewer:</span> {review.reviewer}-
                       {stars} -  &nbsp;
                       {<FDate reviewdate={review.reviewdate} />}
                        </td>                      
                      </tr>
                      <tr>
                        <td colSpan="2"  ><span className='tdcaption' >Subject:</span> {review.reviewtitle} </td>                        
                      </tr>
                      <tr >
                        <td colSpan="2" className='tr-reviw' >{review.reviewbody} </td>
                      </tr>                     
                    </table>
                </div>);
                    
    })  ;

    return (
        <div>{rw}</div>
    ) ; 

}

export default Review ; 