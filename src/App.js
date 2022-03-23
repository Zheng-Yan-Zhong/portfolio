import React from 'react'
import './reset.css'
import { Container } from './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './page/Home'
import Project from './page/Project'
import About from './page/About'
import Note from './page/Note'
import NotFound from './page/NotFound'
import Variables from './components/Variables'
import JavaScript from './components/JavaScript'
function App() {
    return (
        <Container>
            <Router>
                <Navbar />  
                <Routes>
                    <Route exact path="/myportfolio/" element={<Home />} />
                    <Route path="/myportfolio/project" element={<Project />} />
                    <Route path="/myportfolio/note" element={<Note />} />
                    <Route path="/myportfolio/about" element={<About />} />
                    <Route path="/myportfolio/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </Container>
    )
}

export default App