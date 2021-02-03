import { Component } from "react";
import classNames from 'classnames';
import ModalNav from "./atomic/modalNav";
import './consultModal.scss'
import ModalTitle from "./atomic/modalTitle";
import ModalDescript from "./atomic/modalBrt";

class ConsultModal extends Component {
    state = {
        level: 1,
        no: 3,
        debtamount: '',
        checklist: 'defalt',
        name: '',
        tel: '010-4445-3432',
    }


    setLevel = (e) => {
        this.setState(prev => ({ level: e }));
    }

    setCheckList = (a, b) => {
        this.setState(prev => ({ level: a }));
        this.setState(prev => ({ checklist: b }));
    }
    setInfo = (e) => {
        this.setState(prev => ({ debtamount: e }));
    }
    setLevelDebt = (a, b) => {
        this.setState(prev => ({ level: a }));
        this.setState(prev => ({ debtamount: b }));
    }
    setName = (e) => {
        this.setState(prev => ({
            name: e.name1,
            tel: e.phoneNumber,
        }))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        console.log(this.state);
        return (

            <div className='ConsultModal'>
                <button onClick={this.props.modalOff}> X</button>
                <ModalNav setLevel={this.setLevel} />
                <ModalTitle level={this.state.level} />
                <ModalDescript level={this.state.level}
                    setLevel={this.setLevel}
                    setDebtamount={this.setLevelDebt}
                    setCheckList={this.setCheckList}
                    setInfo={this.setInfo}
                    setName={this.setName}
                    name={this.state.name}
                    saveData={this.props.saveData}
                    prevState={this.state}
                    handleChange={this.handleChange}
                />
                <div className='modalButton'></div>
                <div className='modalBottom'></div>
            </div>

        )
    }
}

export default ConsultModal