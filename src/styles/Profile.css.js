import styled from "styled-components";

export const Container = styled.div`
`
export const Icon = styled.div`
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: grey;
    border-bottom: 1px solid lightgray;
`

export const Wrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    @media screen and (min-width: 1024px) {
        text-align: left;
    }
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
` 
export const Avatar = styled.img`
    width: 50%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
    @media screen and (max-width: 800px){
        width: 100%;
    }
`
export const Intro = styled.ul`
    > li {
        font-size: 0.8rem;
        color: grey;
        list-style: none;
        letter-spacing: 1.5px;
        margin-top: 5px;
        @media screen and (min-width: 800px) {
            margin-top: 10px;
        }
    }
    @media screen and (max-width: 700px) {
        margin-top: 0.8rem;
    }
`