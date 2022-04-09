import React from 'react';
import './SurveyForm.css';

import DisplayFeud from '../DisplayFeud/DisplayFeud';

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			question: '',
			answer1: '',
			points1: 0,
			answer2: '',
			points2: 0,
			answer3: '',
			points3: 0,
			answer4: '',
			points4: 0,
			answer5: '',
			points5: 0,
			answer6: '',
			points6: 0,
			answer7: '',
			points7: 0,
			answer8: '',
			points8: 0,
			displayForm: 'block',
			displayFinal: false
		};

    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.displayFinalProduct =this.displayFinalProduct.bind(this);
  }

  handleChange(event) {
		const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
		
		;
    event.preventDefault();
  }

	displayFinalProduct() {
		this.setState({
			displayForm: 'none',
			displayFinal: true
		});
	}

  render() {
    return (
			<div>
			<div className="wrapper" style={{display: this.state.displayForm}}>
      <form className="survey-form" onSubmit={this.handleSubmit}>
				<label>
					<p>Question:</p>
					<div className="row question-row">
						<input
							name="question"
							className="question"
							type="text"
							value={this.state.question}
							onChange={this.handleChange} />
					</div>
				</label>

				<label>
          <p>Answers:</p>
							<div className='row'>
								<div className='column'>
									<div className="container1">
										<input
											name="answer1"
											className="answer"
											type="text"
											value={this.state.answer1}
											onChange={this.handleChange} />
										<input
											name="points1"
											className="points"
											type="number"
											value={this.state.points1}
											onChange={this.handleChange} />
									</div>
								</div>
								<div className='column'>
									<div className="container1">
									<input
											name="answer5"
											className="answer"
											type="text"
											value={this.state.answer5}
											onChange={this.handleChange} />
										<input
											name="points5"
											className="points"
											type="number"
											value={this.state.points5}
											onChange={this.handleChange} />
									</div>
								</div>
							</div>

							<div className='row'>
								<div className='column'>
									<div className="container1">
										<input
											name="answer2"
											className="answer"
											type="text"
											value={this.state.answer2}
											onChange={this.handleChange} />
										<input
											name="points2"
											className="points"
											type="number"
											value={this.state.points2}
											onChange={this.handleChange} />
									</div>
								</div>
								<div className='column'>
									<div className="container1">
										<input
											name="answer6"
											className="answer"
											type="text"
											value={this.state.answer6}
											onChange={this.handleChange} />
										<input
											name="points6"
											className="points"
											type="number"
											value={this.state.points6}
											onChange={this.handleChange} />
									</div>
								</div>
							</div>

							<div className='row'>
								<div className='column'>
									<div className="container1">
										<input
											name="answer3"
											className="answer"
											type="text"
											value={this.state.answer3}
											onChange={this.handleChange} />
										<input
											name="points3"
											className="points"
											type="number"
											value={this.state.points3}
											onChange={this.handleChange} />
									</div>
								</div>
								<div className='column'>
									<div className="container1">
										<input
											name="answer7"
											className="answer"
											type="text"
											value={this.state.answer7}
											onChange={this.handleChange} />
										<input
											name="points7"
											className="points"
											type="number"
											value={this.state.points7}
											onChange={this.handleChange} />
									</div>
								</div>
							</div>

							<div className='row last'>
								<div className='column'>
									<div className="container1">
										<input
											name="answer4"
											className="answer"
											type="text"
											value={this.state.answer4}
											onChange={this.handleChange} />
										<input
											name="points4"
											className="points"
											type="number"
											value={this.state.points4}
											onChange={this.handleChange} />
									</div>
								</div>
								<div className='column'>
									<div className="container1">
										<input
											name="answer8"
											className="answer"
											type="text"
											value={this.state.answer8}
											onChange={this.handleChange} />
										<input
											name="points8"
											className="points"
											type="number"
											value={this.state.points8}
											onChange={this.handleChange} />
									</div>
								</div>
							</div>
        </label>
				<div className="row submit-row">
					<input className="c2a-button submit" type="submit" value="Create" onClick={this.displayFinalProduct} />
				</div>
      </form>
			</div>
			<DisplayFeud 	question={this.state.question}
			answer1={this.state.answer1}
			answer2={this.state.answer2}
			answer3={this.state.answer3}
			answer4={this.state.answer4}
			answer5={this.state.answer5}
			answer6={this.state.answer6}
			answer7={this.state.answer7}
			answer8={this.state.answer8}
			points1={this.state.points1}
			points2={this.state.points2}
			points3={this.state.points3}
			points4={this.state.points4}
			points5={this.state.points5}
			points6={this.state.points6}
			points7={this.state.points7}
			points8={this.state.points8}
			display= {this.state.displayFinal}/>
			</div>
    );
  }
}

export default SurveyForm;