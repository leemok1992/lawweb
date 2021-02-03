import { Component } from "react";
import styled from "styled-components";
import background from './background.jpg'

class Home extends Component {
    render() {
        return (
            <>
                <ImgContainer>
                    <Background src={background} />
                </ImgContainer>
            </>
        )
    }
}

const ImgContainer = styled.div`
     width:100%;
    
`
const Background = styled.img`
    width:100%;
    object-fit:cover;
`



export default Home