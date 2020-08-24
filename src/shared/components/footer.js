import React from 'react';


const Footer =() =>{
    return(
        <footer className="pv4 ph3 ph5-m ph6-l mt5" style={{height:'80px'}}>
        <small className="f6 db tc">© 2020 <b>davpip.com</b>., All Rights Reserved</small>
       
       <style jsx>
         {`
         footer{
          background-color: rgba(0,0,0,0.2);  
      }
      .db {
          display: block;
      }
      
      .dib {
          display: inline-block;
      }
      
      .link {
          text-decoration: none;
          transition: color .15s ease-in;
      }
      
      .link:link, .link:visited {
          transition: color .15s ease-in;
      }
      
      .link:hover {
          transition: color .15s ease-in;
      }
      
      .link:active {
          transition: color .15s ease-in;
      }
      
      .link:focus {
          transition: color .15s ease-in;
          outline: 1px dotted currentColor;
      }
      
      .mid-gray {
          color: #555;
      }
      
      .pv4 {
          padding-top: 2rem;
          padding-bottom: 2rem;
      }
      
      .ph2 {
          padding-left: .5rem;
          padding-right: .5rem;
      }
      
      .ph3 {
          padding-left: 1rem;
          padding-right: 1rem;
      }
      
      .mt3 {
          margin-top: 1rem;
      }
      
      .tc {
          text-align: center;
      }
      
      .ttu {
          text-transform: uppercase;
      }
      
      .f6 {
          font-size: .875rem;
      }
      
      .dim {
          opacity: 1;
          transition: opacity .15s ease-in;
      }
      
      .dim:hover, .dim:focus {
          opacity: .5;
          transition: opacity .15s ease-in;
      }
      
      .dim:active {
          opacity: .8;
          transition: opacity .15s ease-out;
      }
      
      @media screen and (min-width: 30em) and (max-width: 60em) {
          .ph5-m {
              padding-left: 4rem;
              padding-right: 4rem;
          }
      }
      
      @media screen and (min-width: 60em) {
          .ph6-l {
              padding-left: 8rem;
              padding-right: 8rem;
          }
      }
         `}</style> 
      </footer>
        )
        
    };
    
    export default Footer;