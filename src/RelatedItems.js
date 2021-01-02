import { React } from "react";
import movie from './img/movie.jpg';
import book from './img/book.jpg';
import view from './img/view.jpg';
import star from './img/star.jpg';
import comment from './img/comment.jpg';


const RelatedItems = ({items, setMovieDisplay,  setDetailUrl, setRelatedUrl}) => {


    const itm = items.map( item => {
        
        const src = 'https://archive.org/services/img/' + item._id ; 
        const href =  "https://archive.org/metadata/" + item._id ; 
        const relatedHref =  "https://be-api.us.archive.org/mds/v1/get_related/all/" + item._id ; 
        const movieDisplay = "https://archive.org/embed/" + item._id ; 
        

        const setHref = () => {
            setDetailUrl(href) ;  
            setRelatedUrl(relatedHref) ;      
            setMovieDisplay(movieDisplay);                  
        }
      
        const itemIcon =  item._source.mediatype.map( (m) => {
          
            if(m === 'movies')
                return (
                <img src={movie} alt="movie" width="60%" height="8%" />
                );
            else 
                return (
                <img src={book} alt="book" width="55%" height="13%" />
                );
          });
            

        return( <li>
                    <a  title={item._source.title} onClick={setHref} >
                    <table className='RelatedT'>
                        <tr>
                            <td colSpan='4'>
                            <img src={src} alt= {item._source.title} style={{width:'180px',height:'130px'}} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='4' > 
                            [{item._source.title}]
                            </td>
                        </tr>
                        <tr><td colSpan='4'><hr/></td></tr>
                        <tr>
                            <td rowSpan='2'>
                               {itemIcon} 
                            </td>                        
                            <td className='leftBorder' >
                                <img src={view} alt="view" width="55%" height="4%" />
                            </td>
                            <td>
                            <img src={star} alt="view" width="40%" height="3%" />
                            </td>
                            <td>
                            <img src={comment} alt="view" width="40%" height="7%" /><br/>                               
                            </td>
                        </tr>
                        <tr className='subText'>
                            <td>
                                {item._source.downloads}
                            </td>
                            <td>
                            {(item._source.collection.length - 1 )} 
                            </td>
                            <td>
                            {item._source.num_reviews}
                            </td>
                        </tr>
                        
                    </table>
                   
                    </a>
                </li>
            );
                    
    })  ;

    return (
        <div>{itm}</div>
    ) ; 

}

export default RelatedItems ; 