import React from 'react';
import './Header.css';

import Logo from './images/classroom-feud-logo.svg';
import Illustration from './images/illustration-2.svg';

class Header extends React.Component {
	render() {
		return (
			<section className="header">
				<div className="header-container">
					<img className="logo" src={Logo} alt="Classroom Feud logo"/>
					<img className="illustration" src={Illustration} alt="Illustration"/>
					<div className="call-2-action">
						<h1>Put your own spin on a classic game</h1>
						<h2>An interactive and customizable family-feud style game, designed with teachers in mind.</h2>
						<a href="#welcome"><button class="c2a-button">Create Your Game</button></a>
					</div>
				</div>
			</section>
		)
	}
}

export default Header;