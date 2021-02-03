import React from 'react'

import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './NewComponents/home';
import Sub1 from './NewComponents/sub1';
import Sub2 from './NewComponents/sub2';
import Sub3 from './NewComponents/sub3';
import Sub4 from './NewComponents/sub4';
import logo from './logo1.png'


const RouterNav = (props) => {

    return (
        <>
            <NaviContainer>
                <ImgContainer>
                    <LinkBox to='/'><LogoImg src={logo} /></LinkBox>
                </ImgContainer>
                <NaviBox>
                    <NaviDiv>의정종합법률사무소 소개</NaviDiv>
                    <NaviDiv onClick={() => props.modalOn()}>개인회생 자격확인</NaviDiv>
                </NaviBox>
            </NaviContainer>
            <LinkContainer>
                <LinkContainer1>
                    <LinkTag to='/sub1'>개인회생제도</LinkTag>
                    <LinkTag to='/sub2'>개인파산제도</LinkTag>
                    <LinkTag to='/sub3'>회생파산절차</LinkTag>
                    <LinkTag to='/sub4'>불법추심대처</LinkTag>
                    <LinkTag to='/'>홈</LinkTag>
                    <LinkTag to='/adm'>관리자</LinkTag>
                </LinkContainer1>
            </LinkContainer>

        </>

    )
}
const NaviContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    height:7rem;

    border-bottom:1px solid #7d7d7d;
`
const ImgContainer = styled.div`
    width:20rem;
    margin:auto 0;
    margin-left:50px;
    
`
const LinkBox = styled(Link)`
    
`
const NaviBox = styled.div`
    margin:auto 80px;
    display:flex;
`
const NaviDiv = styled.div`
    & + &{
        margin-left:4rem;
    } 
    cursor: pointer;
        
`
const LogoImg = styled.img`
    object-fit:cover;
    height:2rem;
    
`

const LinkContainer1 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const LinkContainer = styled.div`
    z-index:95;
    position:absolute;
    left:90%;
    top:40%;
    height:100%;
`
const LinkTag = styled(Link)`
    color:black;
    text-decoration:none;
    & + & {
        margin-top:40px;
    }
`

export default RouterNav