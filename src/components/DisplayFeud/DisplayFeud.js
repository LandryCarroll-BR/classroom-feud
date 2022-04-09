import React from 'react';
import './DisplayFeud.css';

import Xone from './images/one-x.svg';
import Xtwo from './images/two-x.svg';
import Xthree from './images/three-x.svg';

class DisplayFeud extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pointTotal: 0,
			count: 0
		}

		this.handleChange = this.handleChange.bind(this);
		this.toggleDisplay = this.toggleDisplay.bind(this);
		this.startOver = this.startOver.bind(this);
		this.coverRemove = this.coverRemove.bind(this);
		this.displayXone = this.displayXone.bind(this);
		this.displayXtwo = this.displayXtwo.bind(this);
		this.displayXthree = this.displayXthree.bind(this);
		this.displayXWrapper = this.displayXWrapper.bind(this);
		this.toggleCount = this.toggleCount.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

	toggleDisplay() {
		const display = this.props.display;
		if (display === true) {
			return 'block';
		} else {
			return 'none';
		}
	}

	startOver() {
			window.location.reload();
			return false;
	}

	coverRemove(event) {
		const pointTotal = this.state.pointTotal;
		event.target.style.display = 'none';
		this.setState({pointTotal: pointTotal + Number(event.target.id)})
	}

	toggleCount() {
		if (this.state.count === 0) {
			this.setState({count: 1});
		} else if (this.state.count === 1) {
			this.setState({count: 2}); 
		} else if (this.state.count === 2) {
			this.setState({count: 3});
		} else if (this.state.count === 3) {
			this.setState({count: 4});
		} else if (this.state.count === 4) {
			this.setState({count: 5});
		} else if (this.state.count === 5) {
			this.setState({count: 0}); 
		}
	}

	displayXone() {
		if (this.state.count === 1) {
			return "block";
		} else {
			return "none";
		}
	}

	displayXtwo() {
		if (this.state.count === 3) {
			return "block";
		} else {
			return "none";
		}
	}

	displayXthree() {
		if (this.state.count === 5) {
			return "block";
		} else {
			return "none";
		}
	}

	displayXWrapper() {
		if (this.state.count === 1) {
			return "flex";
		} else if (this.state.count === 3) {
			return "flex";
		} else if (this.state.count === 5) {
			return 'flex';
		} else {
			return "none";
		}
	}

	render() {
		return (
			<div className='display-feud-wrapper' style={{display: this.toggleDisplay()}}>

					<div className="display-x-wrapper" style={{display: this.displayXWrapper()}}>
						<img className="display-x" src={Xone} alt="X" style={{display: this.displayXone()}}/>
						<img className="display-x" src={Xtwo} alt="XX" style={{display: this.displayXtwo()}}/>
						<img className="display-x" src={Xthree} alt="XXX" style={{display: this.displayXthree()}}/>
					</div>

				<div className="row question-row">
					<p className="display-question">{this.props.question}</p>
				</div>

				<div className='row'>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer1}</p>
							<div className="points-container"><p className="display-points">{this.props.points1}</p></div>
							<div className="cover" id={this.props.points1} style={{display: 'block'}} onClick={this.coverRemove}>1</div>
						</div>

					</div>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer5}</p>
							<div className="points-container"><p className="display-points">{this.props.points5}</p></div>
							<div className="cover" id={this.props.points5} style={{display: 'block'}} onClick={this.coverRemove}>5</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer2}</p>
							<div className="points-container"><p className="display-points">{this.props.points2}</p></div>
							<div className="cover" id={this.props.points2} style={{display: 'block'}} onClick={this.coverRemove}>2</div>
						</div>
					</div>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer6}</p>
							<div className="points-container"><p className="display-points">{this.props.points6}</p></div>
							<div className="cover" id={this.props.points6} style={{display: 'block'}} onClick={this.coverRemove}>6</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer3}</p>
							<div className="points-container"><p className="display-points">{this.props.points3}</p></div>
							<div className="cover" id={this.props.points3} style={{display: 'block'}} onClick={this.coverRemove}>3</div>
						</div>
					</div>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer7}</p>
							<div className="points-container"><p className="display-points">{this.props.points7}</p></div>
							<div className="cover" id={this.props.points7} style={{display: 'block'}} onClick={this.coverRemove}>7</div>
						</div>
					</div>
				</div>

				<div className='row answer-row'>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer4}</p>
							<div className="points-container"><p className="display-points">{this.props.points4}</p></div>
							<div className="cover" id={this.props.points4} style={{display: 'block'}} onClick={this.coverRemove}>4</div>
						</div>
					</div>
					<div className='column'>
						<div className="answer-wrapper">
							<p className="display-answer">{this.props.answer8}</p>
							<div className="points-container"><p className="display-points">{this.props.points8}</p></div>
							<div className="cover" id={this.props.points8} style={{display: 'block'}} onClick={this.coverRemove}>8</div>
						</div>
					</div>
				</div>

				<div className="row submit-row bottom">
					<button className="x-button" onMouseDown={this.toggleCount} onMouseUp={this.toggleCount}>X</button>
					<button className="c2a-button submit middle" onClick={this.startOver}>Start Over</button>
					<h1 className="display-point-total">points: {this.state.pointTotal}</h1>
				</div>
			</div>
		)
	}
}

export default DisplayFeud;