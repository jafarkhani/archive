import { React } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const DownloadFiles = ({files , fileNO }) => {

    const download  =  {    MPEG: 0 , 
                            H : 0 , 
                            HMPEG : 0 , 
                            TILE : 0 ,
                            MP3 : 0 , 
                            MPEG2 : 0 ,
                            OGVIDEO : 0 ,
                            SUBRIP : 0 , 
                            TORRENT : 0 , 
                            ALL : 0 ,
                            ORG : 0 
                        }; 

        
    const downloadPath  =  {   
        MPEG: 0 , 
        H : 0 , 
        HMPEG : 0 , 
        TILE : 0 ,
        MP3 : 0 , 
        MPEG2 : 0 ,
        OGVIDEO : 0 ,
        SUBRIP : 0 , 
        TORRENT : 0 , 
        ALL : 0 ,
        ORG : 0 
    }; 
   
     files.forEach((dfile) => {
        
        if(dfile.format === "512Kb MPEG4" ) { 
            download.MPEG = download.MPEG + 1 ; 
            downloadPath.MPEG = "https://archive.org/download/InformationM/" + dfile.name ; 
   
        }        
          
        else if(dfile.format === "h.264" ){
            download.H = download.H + 1 ; 
            downloadPath.H = "https://archive.org/download/InformationM/" + dfile.name ; 
        }
      
        else if(dfile.format === "HiRes MPEG4" ) {
            download.HMPEG = download.HMPEG + 1 ; 
            downloadPath.HMPEG = "https://archive.org/download/InformationM/" + dfile.name ;             
        }
        
        else if(dfile.format === "Item Tile" ) {            
            download.TILE = download.TILE + 1 ; 
            downloadPath.TILE = "https://archive.org/download/InformationM/" + dfile.name ; 
        }

        
        else if(dfile.format === "MP3" )
        {
            download.MP3 = download.MP3 + 1 ; 
            downloadPath.MP3 = "https://archive.org/download/InformationM/" + dfile.name ;            
        }
        
        else if(dfile.format === "MPEG2" ) {
            download.MPEG2 = download.MPEG2 + 1 ; 
            downloadPath.MPEG2 = "https://archive.org/download/InformationM/" + dfile.name ;    
        }
        
        else if(dfile.format === "Ogg Video" ) {
            download.OGVIDEO = download.OGVIDEO + 1 ; 
            downloadPath.OGVIDEO = "https://archive.org/download/InformationM/" + dfile.name ;    
        }
        
        else if(dfile.format === "SubRip" ) {
            download.SUBRIP = download.SUBRIP + 1 ; 
            downloadPath.SUBRIP = "https://archive.org/download/InformationM/" + dfile.name ;   
        }
       
        else if(dfile.format === "Archive BitTorrent" ) {
            download.TORRENT = download.TORRENT + 1 ; 
            downloadPath.TORRENT = "https://archive.org/download/InformationM/" + dfile.name ;   
        }
        
           
        if(dfile.source === "original" ) {
            download.ORG = download.ORG + 1 ;  
            downloadPath.TORRENT = "https://archive.org/compress/InformationM/" + "formats=UNKNOWN,SUBRIP,MPEG2,ARCHIVE%20BITTORRENT,HIRES%20MPEG4,METADATA,ITEM%20TILE" + dfile.name ;    
        }
                  

    }); 

    download.ALL = fileNO ;
    downloadPath.ALL = "  https://archive.org/download/InformationM" ;   
  
        return( <Router>
                <div >                   
                        <table style={{marginTop:'20px'}} > 
                            <caption className='caption2'>DOWNLOAD OPTIONS</caption>                            
                            <tr className='border-bottom'  >
                                <td > 
                                    <Link to={downloadPath.MPEG}   target="_blank" download>512KB MPEG4</Link>                              
                                </td>
                                <td >{download.MPEG} &nbsp; file</td>                  
                            </tr>
                            <tr className='border-bottom' >
                                <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download> H.264</Link> </td>
                                <td>{download.H} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  >
                                <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>HIRES MPEG4</Link> </td>                              
                                <td>{download.HMPEG} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  > 
                          
                            <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>ITEM TILE</Link> </td>                              
                            <td>{download.TILE} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  >
                            <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>MP3</Link> </td>                              
                           <td>{download.MP3} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  >  
                            <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>MPEG2</Link> </td>                              
                            <td>{download.MPEG2} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  >  
                           
                            <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>OGG VIDEO</Link> </td>                              
                            <td>{download.OGVIDEO} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  >  
                            
                            <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>SUBRIP</Link> </td>                              
                            <td>{download.SUBRIP} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  > 
                           
                            <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>TORRENT</Link> </td>                              
                            <td>{download.TORRENT} &nbsp; file</td>
                            </tr>
                            <tr className='border-bottom'  > 
                           
                            <td><Link to="https://archive.org/download/InformationM/InformationM_512kb.mp4" target="_blank" download>SHOW ALL</Link> </td>                              
                            <td>{download.ALL} &nbsp; files <br/><br/> {download.ORG} &nbsp; original</td>
                            </tr>
                            
                        </table>                   
                    
                </div></Router>);
                    

}

export default DownloadFiles ; 