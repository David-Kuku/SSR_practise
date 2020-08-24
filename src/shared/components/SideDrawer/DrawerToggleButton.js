import React from 'react'


const DrawerToggleButton =({ click }) =>{
    return(
        <button className='toggle-button ml2' onClick= {click}>
            <div className='toggle-line bg-white' style={{backgroundColor: "white"}}/>
            <div className='toggle-line bg-white' style={{backgroundColor: "white"}}/>
            <div className='toggle-line bg-white' style={{backgroundColor: "white"}}/>


            <style jsx>{`
            .toggle-button{
                height: 20px;
                width:30px;
                margin-top: 8px;
                background:transparent;
                border: none;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                padding: 0;
                box-sizing: border-box;
            
            }
            .toggle-button:focus{
                outline: none;
            }
            
            .toggle-line{
                
                height: 2px;
                width: 25px;
                border-radius: 1px;
            }
            
            @media only screen and (min-width: 768px){
                .toggle-button{
                    display: none;
                }
                
            }
            `}</style>
        </button>
    )
}

export default DrawerToggleButton