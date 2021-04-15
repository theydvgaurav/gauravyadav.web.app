import React from 'react'
import ppic1 from './Ax.jpeg'
import ppic2 from './Textpad.png'
import ppic3 from './Banking-System.png'
function Projects() {
    return (
        <div className="container">
            <br/>
           <div className='card c_d'>
                <div class="card-body">
                <div className="container-fluid">
                <div className="row align-items-start">
                <div className="col c_d">
                    <a href="https://github.com/theydvgaurav/AppointX-Source-Code"> <img src = {ppic1} className="img-thumbnail" alt = {"Logo"}></img> </a>
                </div>
                <div className="col">
                <div className="main-info">
                <p>
                An interactive web app for online doctor appointments. A new way to replace the traditional appointment system by real-time appointment booking. This web-based application overcomes the issue of managing and booking appointments according to patient’s needs.
                </p>    
                </div>
                </div>
                </div>
                </div>
                </div>
           </div>
           <br/>
           <div className='card c_d'>
                <div class="card-body">
                <div className="container-fluid">
                <div className="row align-items-start">
                <div className="col c_d">
                    <a href="https://github.com/theydvgaurav/Qt_Textpad"><img src = {ppic2} className="img-thumbnail" alt = {"Logo"}></img></a>
                </div>
                <div className="col">
                <div className="main-info">
                <p>
                Developed a Desktop application similar to Notepad using Qt Creator. The GUI was developed using the Qt framework, with functionalities using C++. The GUI and functionality of the Project utilize OOPs Concepts.
                </p>
                </div>
                </div>
                </div>
                </div>
                </div>
           </div>
           <br/>
           <div className='card c_d'>
                <div class="card-body">
                <div className="container-fluid">
                <div className="row align-items-start">
                <div className="col c_d">
                    <a href="https://github.com/theydvgaurav/Banking-System"> <img src = {ppic3} className="img-thumbnail" alt = {"Logo"}></img> </a>
                </div>
                <div className="col">
                <div className="main-info">
                <p>
                This is Command Line Banking-System Project written in C++. There are two major roles here Admin and the User. 
                In this program, the concepts of C++ classes and objects are also used.
                It has several functionalities such as Opening an account, Deleting an Account, Amount Deposition, Amount Withdrawl, and Amount Trasfer.
                </p>    
                </div>
                </div>
                </div>
                </div>
                </div>
           </div>
        </div>
    )
}

export default Projects
