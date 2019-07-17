import React, {Component} from 'react';
import Navi from './components/NavigationBar.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Careers from './components/Careers'
import ThankYou from './components/ThankYou'


class App extends Component {

  state = {
    personnel: {
      executives: [
      {name: 'Mark Jackson', role: 'CEO', age: 58, "years at company": 22}, 
      {name: 'Malinda Jones', role: 'Vice President of Sales', age: 52, "years at company": 16},
      {name: 'Damian Westbrook', role: 'Vice President of Public Affairs', age: 61, "years at company": 17},
      {name: 'Jason Terry', role: 'Vice President of Product Development', age: 57, "years at company": 19},
      {name: 'Sarah Bandwith', role: 'Vice President of Human Resources', age: 49, "years at company": 18},
      {name: 'John Lemons', role: 'Chief Operating Officer', age: 64, "years at company": 20}
      ], 
      managers: [
        {name: 'Darryl Cheng', department: 'HR', age: 41, "years at company": 9}, 
        {name: 'Anita Hill', department: 'HR', age: 39, "years at company": 7}, 
        {name: 'Lena Miller', department: 'HR', age: 36, "years at company": 9}, 
        {name: 'Rohit Reddy', department: 'Product Development', age: 25, "years at company": 3}, 
        {name: 'Andrew Ho', department: 'Product Development', age: 38, "years at company": 12}, 
        {name: 'Rita Mordio', department: 'Product Development', age: 29, "years at company": 7},
        {name: 'DeShawn Howard', department: 'Public Affairs', age: 35, "years at company": 6},
        {name: 'Estelle Lin', department: 'Public Affairs', age: 32, "years at company": 10}, 
        {name: 'Juan DeBiedma', department: 'Public Affairs', age: 26, "years at company": 4}, 
        {name: 'DeAndre Smith', department: 'Sales', age: 39, "years at company": 14}, 
        {name: 'Mohammed Shahir', department: 'Sales', age: 33, "years at company": 11}, 
        {name: 'Olivia Carlin', department: 'HR', age: 37, "years at company": 16} 
      ]
    }, 
    inquiries: [
      {}
    ]
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navi />
            <Route exact path="/" component={Home}  />
            <Route path="/About" render={(props) => <About personnel={this.state.personnel}/>}/>
            <Route path="/Contact" component={Contact} />
            <Route path="/Careers" component={Careers} />
            <Route path="/ThankYou" component={ThankYou} />

        </div>
      </BrowserRouter>
    );
    }
}

export default App;
