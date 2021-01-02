import React from 'react';


const FDate = ({ reviewdate }) => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                       ]; 
                      
    const RDate = reviewdate.substr(0,10) ;    
    
    var d = new Date(RDate);  

    const RD = monthNames[d.getMonth()] + " " + d.getDay() + "," + d.getFullYear() ;
                      
    return (RD);
}

export default FDate ; 
