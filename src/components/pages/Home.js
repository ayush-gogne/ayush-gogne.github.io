import React from "react";
import '../../App.css'
import './Home.css'

function Home() {

    const arr = ["Python", "Java", "JavaScript", "SQL", "VBA", "React", "TypeScript", "HTML/CSS", "R", "C"]
    
    return (
        <div className="hero-container" id = 'home'>
            
            <div class="area">
            
                <div className="hero-text">
                    <h1>Hi, my name is <span>Ayush Gogne</span></h1>
                    <p>I am a BSc. Computer Science graduate of Wilfrid Laurier University.
                    </p>

                    <div className="hero-code">

                        {arr.map((item, index) => (
                            index < arr.length - 1 && <code key={index}>{item},</code>
                        ))}
                        <code>{arr[arr.length - 1]}</code>
                        
                        
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
