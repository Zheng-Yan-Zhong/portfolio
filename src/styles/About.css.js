import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    width: 100vw;
`
export const Title = styled.div`
    padding: 1rem;
    font-weight: 600;
    color: grey;
    border-bottom: 1px solid lightgray;
`
export const Text = styled.p`
    font-size: 0.8rem;
    color: gray;
`
export const Certify = styled.div`
    width: 100%;
    display: flex;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
export const ListItem = styled.div`
    width: 100%;
`
export const Photo = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: contain;
`