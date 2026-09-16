import React from "react";
import '../../App.css'
import './Home.css'
import { Button } from "../Button";

function Home() {

    const arr = ["Python", "Java", "JavaScript", "SQL", "VBA", "React", "TypeScript", "HTML/CSS", "R", "C"]
    
    return (
        <div className="hero-container" id = 'home'>
            
            <div class="area">
            
                <div className="hero-text">
                    <h1>Hi, my name is <span>Ayush Gogne</span></h1>
                    <p>I am a BSC. Computer Science graduate of Wilfrid Laurier University.
                    </p>
                    <p2>
                        Some programming languages I have experience using include:
                    </p2>

                    <div className="hero-code">

                        {arr.map((item, index) => (
                            index < arr.length - 1 && <code key={index}>{item},</code>
                        ))}
                        <code>{arr[arr.length - 1]}</code>
                        
                        
                    </div>

                    <div className = 'hero-btn'>
                        <Button buttonStyle='btn--outline' buttonSize='btn--large' to={'mailto:ayushgogne23@gmail.com'}> 
                            <i class="fa-solid fa-envelope"/>
                            Contact Me
                        </Button>
                    </div>
                    

                    
                </div>

                
            

            
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            

        </div>
    );
}

export default Home;