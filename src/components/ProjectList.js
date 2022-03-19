import React from 'react'
import {
    Container ,
    ProjectLogo
} from '../styles/Project.css'
import { GrProjects } from 'react-icons/gr'
function ProjectList() {
    return (
        <Container>
            <ProjectLogo><GrProjects /> PROJECTS</ProjectLogo>
            <div>
                1
            </div>
            <div>2</div>
        </Container>
    )
}

export default ProjectList