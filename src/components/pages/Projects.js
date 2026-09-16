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
                      src="/git add .Brain.webp"
                      text="Docker Chatbot (LLM-RAG)"
                      label= "Python, Llama, Numpy, BM25, Dense Retrieval"
                      path= "https://drive.google.com/file/d/1l3mYmX5B2vVO6CQdKQO7ptTXKntZVUfq/view?usp=drive_link"
                    />

                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
