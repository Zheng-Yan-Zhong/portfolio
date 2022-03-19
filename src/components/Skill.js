import React from 'react'
import { 
    SkillContainer,
    LeftSkill,
    RightSkill,
    SkillLogo,
    SkillItem,
    SkillIcon
} from '../styles/Skill.css'
import js from '../images/javascript.png'
import reactJS from '../images/react.png'
import reduxJS from '../images/redux.png'
import nodeJS from '../images/nodejs.png'
import expressJS from '../images/express.png'
import mongodb from '../images/mongo.png'
import { GiSkills } from 'react-icons/gi'
function Skill() {
    return (
        <>
            <SkillLogo><GiSkills /> SKILLS</SkillLogo>
            <SkillContainer>
                <LeftSkill>
                    <SkillItem>
                        <SkillIcon src={js} alt="" />
                        <span>JavaScript</span>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={reactJS} alt="" />
                        <span>React.js</span>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={reduxJS} alt="" />
                        <span>Redux</span>
                    </SkillItem>
                </LeftSkill>
                <RightSkill>
                    <SkillItem>
                        <SkillIcon src={nodeJS} alt="" />
                        <span>Node.js</span>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={expressJS} alt="" />
                        <span>Express.js</span>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={mongodb} alt="" />
                        <span>MongoDB</span>
                    </SkillItem>
                </RightSkill>
            </SkillContainer>
        </>
    )
}

export default Skill