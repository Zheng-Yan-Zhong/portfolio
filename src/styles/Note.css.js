import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem 1rem;
    background-color: white;
    transition: 0.3s;
    @media screen and (min-width: 700px){
    }
`
export const Bar = styled.div`
    display: flex;
    justify-content: space-around;
`
export const Wrapper = styled.div`
    display: flex;
    @media screen and (max-width: 500px){
        flex-direction: column;
        padding: 0.5rem;
    }

`
export const InputContainer = styled.div`
    display: flex;
    padding: 5px 10px;
    font-size: 0.8rem;
    border-radius: 8px;
    width: 500px;
    align-items: center;
    border-bottom: 1px solid black;
    box-shadow: 0px 0px 3px 3px lightgray;
    @media screen and (max-width: 600px){
        width: 200px;
    }
    > input {
        border: none;
        height: 30px;
        width: 100%;
        outline: none;
    }
    > i {
        font-size: 1rem;
        cursor: pointer;
    }
`

export const Cards = styled.div`
    padding: 0.5rem;
`
export const Card = styled.div`
    padding: 0.5rem 1rem;
    text-overflow: ellipsis;
    height: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid grey;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 3px #dedcdc;
`



export const Icon = styled.div`
    font-size: 2rem;
    color: gray;
    cursor: pointer;
    @media screen and (max-width: 600px){
        font-size: 1.2rem;
    }
`



export const Menu = styled.ul`
    flex: 1 0 200px;
    margin-top: 10px;
    padding: 0.5rem;
    color: grey;
    font-weight: 600;
`
export const DropDown = styled.div`
    display: none;
    width: 160px;
    z-index: 1;
    padding: 0.5rem;
    transition-duration: 0.5s;
    > a {
        display: block;
        margin-top: 5px;
        color: gray;
        font-size: 0.8rem;
        transition-duration: 0.3s;
        padding: 5px;
        text-decoration: none;
        &:hover {
            color: lightgray;
        }
    }

`
export const List = styled.li`
    list-style: none;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 1rem;
    position: relative;
    transition-duration: 0.5s;

    &:hover ${DropDown}{
        display: block;
        transition-duration: 0.5s;
    }
`



