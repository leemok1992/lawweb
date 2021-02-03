import React, { Component } from 'react'
import styled from 'styled-components'
import svg from '../../auction.svg'

const ModalDescript1 = (props) => {
    return (
        <BrtContainer>
            <Brt onClick={() => props.setLevel(2)} >
                <Svg src={svg} />
                <Text>개인회생</Text>
            </Brt>
        </BrtContainer>
    )
}

const BrtContainer = styled.div`
    height:100%auto;
    display:flex;
    justify-content:center;
`
const Brt = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:180px;
    cursor: pointer;
`
const Svg = styled.img`
    width:150px;
`
const Text = styled.div`
    color:#4669fb;
    padding-top:1rem;
    font-size:1.3rem;
`

const ModalDescript3 = (props) => {
    return (

        <>
            <Des3Container>
                <Desc3LI>채무자가 신청일 전 5년 이내에 면책 받은 사실이 있는경우</Desc3LI>
                <Desc3LI>급여소득자,영업소득자,일용직 아르바이트 등이 아닌,일정한 소득이 없는 경우</Desc3LI>
                <Desc3LI>담보주 채무액이 10억원 초과하거나,무담보 채무액이 5억원을 초과하는 경우</Desc3LI>
                <Desc3LI>조합이나 주식회사 등의 법인은 신청할수 없음.(개인채무만 가능)</Desc3LI>
                <Desc3BrtContainer>
                    <Desc3Brt onClick={() => props.setCheckList(4, "pass")}>위 항목에 해당이 없으면 다음단계 </Desc3Brt>
                </Desc3BrtContainer>
            </Des3Container>
        </>
    )
}

const Des3Container = styled.div`
    padding-left:6rem;
`
const Desc3LI = styled.li`
    & + & {
        padding-top:1rem;
    }
`
const Desc3BrtContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:2rem;
`
const Desc3Brt = styled.button`
    margin-right:40px;
    cursor: pointer;
`

const ModalDescript2 = (props) => {
    const debt1 = "1천 만원 ~3 천 만원"
    const debt2 = "5천 만 ~ 1억 원"
    const debt3 = "3천 만원 ~ 5천 만원"
    const debt4 = "1억 원 이상"
    return (

        <>
            <DesContainer>
                <DesContainer1>
                    <DesBox onClick={() => props.setDebtamount(3, debt1)}>{debt1}</DesBox>
                    <DesBox onClick={() => props.setDebtamount(3, debt2)}>{debt2}</DesBox>
                    <DesBox onClick={() => props.setDebtamount(3, debt3)}>{debt3}</DesBox>
                    <DesBox onClick={() => props.setDebtamount(3, debt4)}>{debt4}</DesBox>
                </DesContainer1>
            </DesContainer>
        </>
    )
}

const DesContainer = styled.div`
        display:flex;
        justify-content:center;
        width:100%;
        height:150px;
    `
const DesContainer1 = styled.div`
        display:flex;
        width:80%;
        height:80%;
    
    `
const DesBox = styled.div`
        border:1px solid gray;
        border-radius:2px;
        flex:1 1 25%;
        padding:auto 0;
        cursor: pointer;
    `
class ModalDescript4 extends Component {
    state = {

    }
    setName1 = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    setName2 = (e) => {
        e.preventDefault()
        this.props.setName(this.state)
        this.props.saveData(this.props.prevState)
    }




    render() {


        return (
            <>
                <Des4Container>
                    <Form>
                        <InputBox>
                            <InputName onChange={this.props.handleChange} placeholder='이름' name="name" />
                            <InputPoneNumber onChange={this.props.handleChange} placeholder='전화번호' name="tel" />

                        </InputBox>
                        <ButtonBox>
                            <SubmitButton value={this.handleChange} onClick={this.setName2} name="name">개인회생 가능성 알아보기</SubmitButton>
                        </ButtonBox>
                    </Form>
                </Des4Container>
            </>
        )
    }
}


const Des4Container = styled.div`
    padding-left:6rem;
`
const Form = styled.form`
    margin-top:2rem;
    display:flex;
`
const InputBox = styled.div`
    display:flex;
    flex-direction:column;
`
const InputName = styled.input`
    width:20rem;
    height:2.5rem;
    padding-left:1rem;
    border-radius:8px;
`
const InputPoneNumber = styled.input`
    width:20rem;
    height:2.5rem;
    margin-top:1.5rem;
    padding-left:1rem;
    border-radius:8px;
`
const ButtonBox = styled.div`
    display:flex;
    flex-direction:column-reverse;
`
const SubmitButton = styled.button`
    margin-left:3rem;
    height:2.5rem;
    width:13rem;
    border-radius:8px;
    border:none;
    color:white;
    background-color:blue;
    cursor: pointer;
`

const ModalDescript = (props) => {
    const Main = () => {
        switch (props.level) {
            case 1:
                return <ModalDescript1 setLevel={props.setLevel} />;
            case 2:
                return <ModalDescript2 setDebtamount={props.setDebtamount} />;
            case 3:
                return <ModalDescript3 setCheckList={props.setCheckList} />;
            case 4:
                return <ModalDescript4 setName={props.setName} name={props.name} saveData={props.saveData} prevState={props.prevState}
                    handleChange={props.handleChange} />;
            case 0:
                return <ModalDescript2 />;
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

export default ModalDescript