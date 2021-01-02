import React,{ useState, useEffect } from 'react';
import { useFetch } from "./useFetch";
import './App.css';
import movie from './img/movie.jpg';
import comment from './img/comment.jpg';

import Details from './Details';
import Review from './Review';
import RelatedItems from './RelatedItems';
import DownloadFiles from './DownloadFiles';
/*import { useMediaQuery } from 'react-responsive'*/

const App = () => {
  

  /*const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })*/
  
  const [detailUrl , setDetailUrl] = useState("https://archive.org/metadata/InformationM");    
  const [relatedUrl , setRelatedUrl] = useState("https://be-api.us.archive.org/mds/v1/get_related/all/InformationM");    
  const [movieDisplay , setMovieDisplay ] = useState("https://archive.org/embed/InformationM");    

  const ItemDetail =  useFetch(detailUrl) ;
  const RelatedItem =  useFetch(relatedUrl) ;
  
   
  if( ItemDetail.loading !== true ){    
       
   // console.log(RelatedItem.data); 
   //console.log(RelatedItem.data.hits.hits[0]._source.collection.length) ; 

  }

  return (
    <div className='App'>
       <div className="videoWrapper" >
            <iframe src= {movieDisplay}
                    width="320" height="240" frameBorder="0" webkitallowfullscreen="true" 
                    mozallowfullscreen="true" allowFullScreen >
            </iframe>                               
           </div>
    {ItemDetail.loading  ? 'loading....' :  
              <div> <br/><br/>
              
              <table>
              <tr>
                <td>
                <span className='caption'>
                  <img src={movie} alt="movie" width='10%' height='18%' />{ItemDetail.data.metadata.title}
                </span>
                </td>
                <td rowSpan ='3' style={{paddingTop:'0px'}} >                                                 
                    <DownloadFiles files={ItemDetail.data.files} fileNO={ItemDetail.data.files_count} />              
                </td>
              </tr>
              <tr>
                <td className='leftTD'>
                  <div>
                    <Details metadata={ItemDetail.data.metadata}/> 
                    </div>                                     
                </td>              
               
              </tr>  
              <tr>
                <td> 
                  <div>                   
                  <h1> <img src={comment} alt="comment" width='5%' height='5%' /> Reviews</h1> <hr/>                                         
                  {<Review reviews={ItemDetail.data.reviews}/>}
                  </div> 
                </td>
                
              </tr>
              </table>
            </div>
  
    }           
    <div>{RelatedItem.loading  ? 'loading....' :  
                    <div>
                      <ul>
                        <RelatedItems items={RelatedItem.data.hits.hits} setMovieDisplay={setMovieDisplay} setDetailUrl={setDetailUrl} setRelatedUrl={setRelatedUrl}/>
                      </ul>
                    </div>
                          } 
                          
    </div> 
    
  </div>
  ); 

}

export default App ; 
