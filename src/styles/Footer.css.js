import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 4rem 4rem 2rem 4rem;
    background-color: #403f3e;
    
    @media screen and (max-width: 750px){
        padding: 2rem;
    }
`

export const FooterLists = styled.ul`
    list-style: none;
    padding: 4rem;
    margin: 0;
    @media screen and (max-width: 750px) {
        padding: 2rem;        
    }
`
export const FooterItem = styled.li`
border-bottom: 1px solid whitesmoke;
`
export const FooterLink = styled.a`
    text-decoration: none;
    color: lightgray;
    transition: 0.3s;
    &:hover {
        color: grey;
    }
`
export const CopyRight = styled.div`
    margin-top: 3rem;
    text-align: center;
    color: lightgray;
`