import Link from 'next/link'
import React from 'react';



const SideDrawer =({ show }) =>{
    let drawerclasses = 'sidedrawer';

    if(show){
        drawerclasses = 'sidedrawer open'
    }
    return(
        <div className={drawerclasses} style={{textAlign:"center"}}>
            <hr className='mt2 ml2 mr2'/>
            <div><button className='cen1 btn btn-primary mt2 '><Link href="/"><a style={{color:"white"}}>Home</a></Link></button></div>
            <div><button className='cen1 btn-black white mt2' style={{marginTop:"10px"}}><Link href="/archives"><a style={{color:"white"}}>Archive</a></Link></button></div>

            <style jsx>{`
            .sidedrawer{
                height: 100%;
                width: 70%;
                max-width: 300px;
                background-color: white;
                box-shadow: 1px 0px 2px rgba(0,0,0,0.5);
                position: fixed;
                top: 0;
                right: 0;
                z-index: 200;
                transform: translateX(100%);
                transition: transform 0.3s ease-out;
            }
            .cen1{
                text-align: center;
            }
            @media only screen and (min-width: 768px){
                
            }
            
            .sidedrawer.open{
                transform: translateX(0);
            }
            .btn-black{
                background-color: black;
                border: 0;
                border-radius: 3px;
                height: 30px;
                width: 70px;
            }
            `}</style>
        </div>
        )
        
    }
    
    export default SideDrawer