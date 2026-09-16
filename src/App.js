import React from "react"
import "./App.css"
import NavBar from "./components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            
            <Router>
                <NavBar />
                <Home />
                <Projects />
                <Footer/>
            </Router>
            
        </div>
    );
}

export default App;