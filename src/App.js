import React, { Component } from 'react';
import './App.scss';
import ConsultModal from './NewComponents/consultModal';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './NewComponents/home';
import Sub1 from './NewComponents/sub1';
import Sub2 from './NewComponents/sub2';
import Sub3 from './NewComponents/sub3';
import Sub4 from './NewComponents/sub4';
import Adm from './NewComponents/Adm';
import RouterNav from './routerNav';


class App extends Component {
  state = {
    modalOn: false,
    maxNo: 2,
    boards: [{
      no: 1,
      debtamount: '',
      checklist: '',
      name: 'lee',
      tel: '010',
    }]
  }
  handleSaveData = (e) => {
    const state = this.state;
    this.setState({
      boards: state.boards.concat({ no: state.maxNo++, ...e })
    });
  }

  modalOn = () => {
    this.setState(prev => ({ modalOn: true }));
  }
  modalOff = () => {
    this.setState(prev => ({ modalOn: false }));
  }
  render() {
    const ColsultModal1 = () => {
      if (this.state.modalOn) {
        return <ConsultModal modalOff={this.modalOff} saveData={this.handleSaveData} />
      }
      return null;
    }
    return (

      <div className="App">

        <BrowserRouter>
          <RouterNav modalOn={this.modalOn} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sub1' component={Sub1} />
            <Route path='/sub2' component={Sub2} />
            <Route path='/sub3' component={Sub3} />
            <Route path='/sub4' component={Sub4} />
            <Route path='/adm' render={() => <Adm data={this.state} />} />
          </Switch>
        </BrowserRouter>
        <ColsultModal1 />
      </div>

    );
  }
}

export default App;
