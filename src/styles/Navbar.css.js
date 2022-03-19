import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    width: 100vw;
    height: ${(props) => (props.height ? "100vh" : "80px")};
    line-height: 80px;
    display: flex;
    flex-direction: column;
    background-color: ${({bgc}) => bgc};
    color: ${({color}) => color};
    transition: 0.5s;
    box-shadow: 2px 2px 10px 5px lightgray;
    @media screen and (max-width: 750px) {
        
    }
`

export const NavbarWrap = styled.div`
    width: 100%;
    display: flex;
    `
export const NavLeft = styled.div`
    flex: 60%;
    display: flex;
    margin-left: 2rem;
    align-items: center;
    @media screen and (max-width: 750px){
        display: none;
    }
`
export const NavRight = styled.div`
    flex: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 750px){
        display: none;
    }
`
export const Anchor = styled.a`
    color: ${({color}) => color};
    text-decoration: none;
    margin-left: 1rem;
    transition: 0.3s;
    &:hover {
        color: grey;
    }`

export const NavLink = styled(Link)`
    color: ${({color}) => color};
    text-decoration: none;
    margin-left: 1rem;
    transition: 0.3s;
    &:hover {
        color: grey;
    }
`
export const Icons = styled.div`
    margin-right: 1rem;
    font-size: 1.5rem;
    @media screen and (max-width: 750px){
        margin-right: 0;
        text-align: center;
    }
`
export const Ham = styled.div`
    flex: 60%;
    line-height: 80px;
    color: ${({color}) => color};
    @media screen and (min-width: 750px){
        display: none;
    }
`   
export const HamButton = styled.button`
    border: none;
    outline: none;
    transition: 0.2s;
    margin-left: 2rem;
    background: none;
    font-size: 1.2rem;
    &:active {
        color: lightgray;
    }
`
export const HamLogo = styled.div`
    line-height: 80px;
    font-size: 2rem;
    color: grey;
    margin-right: 1rem;
    @media screen and (min-width: 750px){
        display: none;
    }
`
export const NavExtend = styled.div`
    transition: 0.3s;
`
export const ExtendContainer = styled.ul`
    user-select: none;
    margin: 0;
    padding: 0;
    padding: 2rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-top: 1px solid gray;
    text-align: center;
`
export const ExtendItem = styled.li`
    width: 100%;
    border-bottom: 1px solid lightgray;
    margin-top: 1rem;
`

export const Toggle = styled.div`
    text-align: center;
    font-size: 2rem;
    margin-left: 15px;
`