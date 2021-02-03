import React, { Component } from 'react'
import styled from 'styled-components'
const Modaltitle1 = () => {
    return (
        <Title>
            개인회생 버튼을 누르면 심사가 시작됩니다.
        </Title>
    )
}

const Modaltitle2 = () => {
    return (
        <Title>
            연소득을 입력하세요
        </Title>
    )
}

const Modaltitle3 = () => {
    return (
        <Title>
            개인회생 면책 불허가 사유
        </Title>
    )
}

const Modaltitle4 = () => {
    return (
        <Title>
            이름과 휴대폰을 입력하고 인증번호를 입력하면
            <br />회생 자격가능성을 확인 할 수 있습니다


        </Title>
    )
}

class ModalTitle extends Component {
    render() {
        const Main = () => {
            switch (this.props.level) {
                case 1:
                    return <Modaltitle1 />;
                case 2:
                    return <Modaltitle2 />;
                case 3:
                    return <Modaltitle3 />;
                case 4:
                    return <Modaltitle4 />;
                case 0:
                    return <Modaltitle1 />;
                default:
                    break;
            }
        }
        return (
            <>
                <Main />
            </>
        )
    }
}

const Title = styled.div`
    font-size:1.5rem;
    display:flex;
    height:10rem;
    align-items:center;
    padding-left:6rem;
    color:gray;
`
export default ModalTitle