import styled from 'styled-components'

export const Container = styled.div`
    padding: 1rem;
    font-size: 1rem;
    color: grey;
    font-weight: 600;
    background-color: white;
    border-radius: 12px;
    margin-top: 0.6rem;
    box-shadow: 2px 2px 5px 5px lightgray;
`
export const ProjectLogo = styled.div`
    border-bottom: 1px solid lightgray;
    padding-bottom: 1rem;
`

export const ProjectShow = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    padding: 2rem;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        padding: 1.5rem;
    }
`

export const Gif = styled.img`
    flex: 1;
    width: 50%;
    max-height: 600px;
    @media screen and (max-width: 600px){
        width: 100%;
    }
`
export const Detail = styled.div`
    font-size: 0.8rem;
    flex: 1;
    margin-left: 20px;
    padding: 0.5rem;
    @media screen and (max-width: 600px){
        width: 100%;
        margin-top: 0.6rem;
    }
`
