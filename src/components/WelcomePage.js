import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default function WelcomePage(props) {
	return (
		<section className='welcome-page'>
			<header>
				<Container className='themed-container' fluid={true}>
					<h3 class='row justify-content-center'>"Yeah, welcome to the club, pal." - Butter Robot</h3>
				</Container>
				<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
				<div class='row justify-content-center'>
					{/*<Link to='/characters'>
						<Button color='info'>They're Real "Characters"</Button>
  </Link>*/}
				</div>
			</header>
		</section>
	);
}
