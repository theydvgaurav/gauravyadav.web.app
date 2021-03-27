import React from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js'
function Home() {
    return (
        <div className = "header-wraper">
        <div className = "main-info">
            <Typed className = "typed-text" 
            strings = {["Network Security" , "Web Development" , "Data Structures and Algorithms"]}
            typeSpeed={50}
            backSpeed = {70}
            loop
            />
            <Particles
            params={{

                polygon: {
                    enable: true,
                    type: 'inside',
                    number : 30,
                    value_area : 900,
                    move: {
                        radius: 10
                    },
                    url: 'path/to/svg.svg'
                }}}/>
        </div>      
        </div>
    )
}

export default Home
