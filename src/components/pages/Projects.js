import React from 'react'
import CardItem from '../CardItem'
import './Projects.css'

function Projects() {
  return (
    <div className='cards' id = 'projects'>

        <h1>Projects</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem 
                      src="/Brain.webp"
                      text="Docker Chatbot (LLM-RAG)"
                      label= "Python, Llama, Numpy, BM25, Dense Retrieval"
                      path= "https://drive.google.com/file/d/1l3mYmX5B2vVO6CQdKQO7ptTXKntZVUfq/view?usp=drive_link"
                    />

                    <CardItem
                      src="/Code.webp"
                      text="Portfolio Website"
                      label="React, JavaScript, HTML, CSS, GitHub Pages"
                      path="https://github.com/ayush-gogne/ayush-gogne.github.io"
                    />

                    <CardItem
                      src="/Pixels.webp"
                      text="Cellular Automata Simulator"
                      label="Java, Java Runtime Environment"
                      path="https://drive.google.com/file/d/1Sk2aTjPa4c_qQZSDgMO1Lcd2PRz50M71/view?usp=drive_link"
                    />

                </ul>

                
            </div>
        </div>
      
    </div>
  )
}

export default Projects
