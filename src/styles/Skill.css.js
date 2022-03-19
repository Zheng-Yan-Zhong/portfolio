import styled from "styled-components";

export const SkillLogo = styled.div`
    margin-left: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid lightgray;
    color: gray;
    font-weight: 600;
    
`

export const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 2px 2px 5px 5px lightgray;
    @media screen  and (max-width: 600px){
        flex-direction: column;
    }
`

export const LeftSkill = styled.div`
    flex: 50%;
    padding: 1rem 2rem 1rem 4rem;
`

export const RightSkill = styled.div`
    flex: 50%;
    padding: 1rem 2rem 1rem 4rem;
`
export const SkillItem = styled.div`
    display: flex;
    color: gray;
    font-size: 0.9rem;
    align-items: center;
`
export const SkillIcon = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
`
