import React from 'react';
import './App.css';

import Curve from '../Header/images/curve.svg';
import Header from '../Header/Header'
import SurveyList from '../SurveyList/SurveyList';


class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    surveyLists: [<div></div>]
  }

  this.addList = this.addList.bind(this);
}

  addList() {
    this.setState({surveyLists: [...this.state.surveyLists, <SurveyList/>]})
  }

  render() {
    return (
      <div className="app">
        <Header />
        <img id="welcome" className="curve" src={Curve} alt="curve.svg"/>
        <div className="text">
          <h1>Let's get started!</h1>
          <h2>
            Using the form below, enter your survey question, answers, and point values.
            When you're ready, hit the create button to begin the game!
            When a team answers incorrectly, hold down the "x" button.
            To create multiple rounds (or game boards) at one time,
            use the "+ Add Game Board" button found at the bottom of the page.
          </h2>
        </div>
        <SurveyList />
        {this.state.surveyLists}
        <div className="add-game-button" onClick={this.addList}><h3>+ Add Game Board</h3></div>
      </div> 
    )
  }
}

export default App;
