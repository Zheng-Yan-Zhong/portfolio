import React from 'react'
import './reset.css'
import { Container } from './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Project from './components/Project'
import { Content } from './styles/Content'

function App() {
    return (
        <Container>
            <Navbar />
            <Content>
                <Skill />
                <Project />
                <Contact />
            </Content>
            <Footer />
        </Container>
    )
}

export default App