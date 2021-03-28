import React from 'react'
import Typed from 'react-typed'
function Home() {
    return (
        <div className='b_g'>
        <div className = "header-wraper">
        <div className = "main-info">
            <Typed className = "typed-text" 
            strings = {["Web Application Security" , "Data Structures and Algorithms", "Web Development" ]}
            typeSpeed={50}
            backSpeed = {70}
            loop
            />
            </div>                              
         <div className = "main-info">
            
        </div>      
        </div>
        </div>
    )
}

export default Home
