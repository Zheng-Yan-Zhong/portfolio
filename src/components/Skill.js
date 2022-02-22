import React from 'react'
import { 
    SkillContainer,
    LeftSkill,
    RightSkill,
    SkillLogo,
    SkillItem
} from '../styles/Skill.css'
import { GrVulnerability } from 'react-icons/gr'
function Skill() {
    return (
        <>
            <SkillLogo><GrVulnerability /> SKILLS</SkillLogo>
            <SkillContainer>
                <LeftSkill>
                    <SkillItem>JavaScript</SkillItem>
                    <SkillItem>React.js</SkillItem>
                    <SkillItem>RWD</SkillItem>
                </LeftSkill>
                <RightSkill>
                    <SkillItem>Node.js</SkillItem>
                    <SkillItem>Express.js</SkillItem>
                    <SkillItem>MongoDB</SkillItem>
                </RightSkill>
            </SkillContainer>
        </>
    )
}

export default Skill