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
    ExtendItem,
    Toggle,
    Anchor
} from '../styles/Navbar.css'
//icons
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { DiJavascript1 } from 'react-icons/di'
import { AiOutlineMail, AiOutlineGithub, AiOutlineFacebook } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../reducer/theme'
//render
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.value)
    console.log(theme);
    return (
        <Nav height={isOpen} color={theme.color} bgc={theme.bgc}>
            <NavbarWrap>
                <NavLeft>
                    <NavLink color={theme.color} to="/">HOME</NavLink>
                    <NavLink color={theme.color} to="/about">ABOUT</NavLink>                    
                    <NavLink color={theme.color} to="/project">PROJECT</NavLink>
                    <NavLink color={theme.color} to="/note">NOTE</NavLink>
                </NavLeft>
                <Ham color={theme.color} onClick={() => setIsOpen(!isOpen)}>
                    <HamButton><GiHamburgerMenu /></HamButton>
                </Ham>
                <NavRight>
                    <Icons >
                        <Anchor color={theme.color}  href='https://github.com/Zheng-Yan-Zhong'><AiOutlineGithub /></Anchor>
                        <Anchor color={theme.color} href='https://www.facebook.com/dennis.jonh'><AiOutlineFacebook /></Anchor>
                        <Anchor color={theme.color} href='mailto:ococo09000@gmail.com'><AiOutlineMail /></Anchor>
                        <span style={{marginLeft: "1rem"}}>{theme.bgc === 'white' ? <MdOutlineLightMode onClick={() => dispatch(darkMode())} /> : <MdOutlineDarkMode  onClick={() => dispatch(lightMode())} />}</span>
                    </Icons>         
                </NavRight>
                <HamLogo>
                    <NavLink color={theme.color} to="/"><DiJavascript1 /></NavLink>
                </HamLogo>
            </NavbarWrap>
            {isOpen && <NavExtend>
                <ExtendContainer>
                    <Toggle>  
                        <div>{theme.bgc === 'white' ? <MdOutlineLightMode onClick={() => dispatch(darkMode())} /> : <MdOutlineDarkMode  onClick={() => dispatch(lightMode())} />}</div>                  
                        
                    </Toggle>
                    <ExtendItem onClick={() => setIsOpen(!isOpen)}><NavLink color={theme.color} to="/">HOME</NavLink></ExtendItem>
                    <ExtendItem onClick={() => setIsOpen(!isOpen)}><NavLink color={theme.color} to="/about">ABOUT</NavLink></ExtendItem>                    
                    <ExtendItem onClick={() => setIsOpen(!isOpen)}><NavLink color={theme.color} to="/project">PROJECT</NavLink></ExtendItem> 
                    <ExtendItem onClick={() => setIsOpen(!isOpen)}><NavLink color={theme.color} to="/note">NOTE</NavLink></ExtendItem>
                    <Icons >
                        <Anchor color={theme.color}  href='https://github.com/Zheng-Yan-Zhong'><AiOutlineGithub /></Anchor>
                        <Anchor color={theme.color} href='https://www.facebook.com/dennis.jonh'><AiOutlineFacebook /></Anchor>
                        <Anchor color={theme.color} href='mailto:ococo09000@gmail.com'><AiOutlineMail /></Anchor>
                    </Icons>         
                </ExtendContainer>
            </NavExtend>}
        </Nav >   
    )
}
export default Navbar