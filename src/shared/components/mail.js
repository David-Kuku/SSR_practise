import React, { Component } from 'react'
import Mailchimp from 'react-mailchimp-form'

const Mail =()=>{
    return(
        <div className="sub1">
        <p className="sub ">Subscribe to our newsletter</p>
        <Mailchimp
        action="https://davpip.us17.list-manage.com/subscribe/post?u=610d4b2ea10acf0d94c906e0a&amp;id=d26acf1088" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          }
        ]}
        />

        <style jsx>{`
        input{
          width: 80%
        }
        
        .sub1{
          text-align: center;
          margin-bottom: 50px
        }
        
        @media only screen and (min-width: 768px){
          input{
            width: 80%;
            border-radius: 5px;
          }
          
          .sub{
            text-align: center;
            margin-top: 150px;
          }
        }
        
        form{
          display: block;
          text-align: center;
        }
        
        button{
          border-radius: 15px;
         
        }
        .content{
          margin-bottom: 400px;
        }
        `}</style>
        </div>
    )
}

export default Mail