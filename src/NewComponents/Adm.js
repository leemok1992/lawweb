import { Component } from "react";

class Sub1 extends Component {


    render() {
        const { boards } = this.props.data;

        return (
            <>

                <div>
                    <table boarder="1">
                        <tbody>
                            <tr align="left">
                                <td width="50" >no.</td>
                                <td width="100">debt.</td>
                                <td width="100">pass</td>
                                <td width="100">name</td>
                                <td width="100">number</td>
                            </tr>
                            {
                                boards.map(raw => (
                                    <BorderItem key={raw.no} row={raw} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
class BordeForm extends Component {
    state = {

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.handelSave(this.state)
    }
    render() {
        console.log(this.state)
        return (
            <>
                <form onSubmit={this.handelSubmit}>
                    <input placeholder="이름" onChange={this.handleChange} name="name" />
                    <input placeholder="번호" onChange={this.handleChange} name="phoneNumber" />
                    <button type="submit">save</button>
                </form>
            </>
        )
    }
}

class BorderItem extends Component {
    render() {

        return (
            <tr>
                <td>{this.props.row.no}</td>
                <td>{this.props.row.debtamount}</td>
                <td>{this.props.row.checklist}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.tel}</td>
            </tr>
        )
    }
}

export default Sub1