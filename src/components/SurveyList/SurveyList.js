import React from 'react';
import './SurveyList.css';

import SurveyForm from '../SurveyForm/SurveyFrom';

class SurveyList extends React.Component {
	render() {
		return (
		<div id="survey-list" className="survey-list">
			<SurveyForm />
		</div>
		);
	}
}

export default SurveyList;