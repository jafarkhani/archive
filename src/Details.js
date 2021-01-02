import React from 'react';


const Details = ({ metadata }) => {

    return (
        <table> 
           
            <tr>
                <td className='tdcaption'>Publication date</td><td>{metadata.date}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Usage</td><td>{metadata.licenseurl}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Topics</td><td>{metadata.subject}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Digitizing sponsor</td><td>{metadata.sponsor}</td>
            </tr>
            <tr  className='desc' >
               <td colSpan='2' >{metadata.description}</td>
            </tr>

            <tr>
                <td className='tdcaption' >Addeddate</td><td>{metadata.addeddate}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Closed captioning</td><td>{metadata.closed_captioning}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Collectionid</td><td>{metadata.collectionid}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Color</td><td>{metadata.color}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Identifier</td><td>{metadata.identifier}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Numeric_id</td><td>{metadata.numeric_id}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Proddate</td><td>{metadata.proddate}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Run time</td><td>{metadata.runtime}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Sound</td><td>{metadata.sound}</td>
            </tr>
            <tr>
                <td className='tdcaption' >Type</td><td>{metadata.type}</td>
            </tr>
            
           
      </table> 
    );
}

export default Details ; 