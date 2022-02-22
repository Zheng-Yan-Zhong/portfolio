import React, { useState } from 'react'
import {
    Nav,
    NavbarWrap,
    NavLeft,
    NavRight,
    NavLink,
    Icons,
    Ham,
    HamButton,
    HamLogo,
    NavExtend,
    ExtendContainer,
    ExtendItem
} from '../styles/Navbar.css'
//icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { DiJavascript1 } from 'react-icons/di'
import { AiOutlineMail, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'

//render
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav height={isOpen}>
            <NavbarWrap>
                <NavLeft>
                    <NavLink href=''>HOME</NavLink>
                    <NavLink href=''>ABOUT</NavLink>
                    <NavLink href=''>PROJECT</NavLink>
                    <NavLink href=''>CONTACT</NavLink>
                </NavLeft>
                <Ham onClick={() => setIsOpen(!isOpen)}>
                    <HamButton><GiHamburgerMenu /></HamButton>
                </Ham>
                <NavRight>
                    <Icons >
                        <NavLink href=''><AiOutlineGithub /></NavLink>
                        <NavLink href=''><AiOutlineInstagram /></NavLink>
                        <NavLink href=''><AiOutlineMail /></NavLink>
                    </Icons>         
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </NavRight>
                <HamLogo>
                    <NavLink href=''><DiJavascript1 /></NavLink>
                </HamLogo>
            </NavbarWrap>
            {isOpen && <NavExtend>
                <ExtendContainer>
                    <ExtendItem><NavLink href=''>HOME</NavLink></ExtendItem>
                    <ExtendItem><NavLink href=''>ABOUT</NavLink></ExtendItem>
                    <ExtendItem><NavLink href=''>PROJECT</NavLink></ExtendItem>
                    <ExtendItem><NavLink href=''>CONTACT</NavLink></ExtendItem>
                    <Icons >
                        <NavLink href=''><AiOutlineGithub /></NavLink>
                        <NavLink href=''><AiOutlineInstagram /></NavLink>
                        <NavLink href=''><AiOutlineMail /></NavLink>
                    </Icons>         
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </ExtendContainer>
            </NavExtend>}
        </Nav >   
    )
}
export default Navbar