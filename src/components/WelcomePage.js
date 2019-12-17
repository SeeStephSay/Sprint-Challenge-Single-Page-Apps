import React from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export default function WelcomePage(props) {
	return (
		<section className='welcome-page'>
			<header>
				<Container className='themed-container' fluid={true}>
					<h4 class='row justify-content-center'>"Yeah, welcome to the club, pal." - Butter Robot</h4>
				</Container>
				<img
					className='main-img'
					src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
					alt='rick'
				/>
			</header>
		</section>
	);
}
