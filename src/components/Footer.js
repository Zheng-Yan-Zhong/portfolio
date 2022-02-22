import React from 'react'
import { 
    FooterContainer,
    FooterLists,
    FooterItem,
    FooterLink,
    CopyRight
    } from '../styles/Footer.css'
import { BiCopyright } from 'react-icons/bi'
function Footer() {
    return (
        <FooterContainer>
            <FooterLists>
                <FooterItem><FooterLink href="">Github</FooterLink></FooterItem> 
                <FooterItem><FooterLink href="">Email</FooterLink></FooterItem> 
                <FooterItem><FooterLink href="">Message</FooterLink></FooterItem> 
            </FooterLists>
            <CopyRight><BiCopyright />2022 Zheng-Yan-Zhong</CopyRight>
        </FooterContainer>
    )
}

export default Footer