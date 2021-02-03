import React from 'react'
import styled from 'styled-components'

const ModalNav = (props) => {

    return (
        <>
            <NavContainer>
                <Nav1 onClick={() => props.setLevel(1)}>Level1</Nav1>
                <Nav1 onClick={() => props.setLevel(2)}>Level2</Nav1>
                <Nav1 onClick={() => props.setLevel(3)}>Level3</Nav1>
                <Nav1 onClick={() => props.setLevel(4)}>Level4</Nav1>
            </NavContainer>
        </>
    )
}

const NavContainer = styled.div`
    
    display:flex;
    height:2.8rem;
    align-items:flex-end;
    padding-bottom:0.5rem;
    padding:0 3rem;
`
const Nav1 = styled.div`
    border:none;
    padding:0 0 ;
    height:1rem;
    cursor: pointer;
   
   color:gray;
   &:hover{
       color:#4669fb;
   }
   & + & {
       margin-left:4rem;
   }
`

export default ModalNav