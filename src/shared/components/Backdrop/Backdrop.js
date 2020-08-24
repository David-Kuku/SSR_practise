import React from 'react'


const Backdrop =({ click }) =>(
    <div className='backdrop' onClick={click}>
        
        <style jsx>{`
        .backdrop{
            position: fixed;
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,0.3);
            z-index: 100;
            top: 0;
            right: 0;
        }
        `}</style>
    </div>
)

export default Backdrop;