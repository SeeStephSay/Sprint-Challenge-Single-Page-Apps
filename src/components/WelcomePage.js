import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function WelcomePage() {
	return (
		<section className='welcome-page'>
			<header>
				<h1>"Yeah, welcome to the club, pal." - Butter Robot</h1>
				<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
				<div class='row justify-content-center'>
					<Link to='/characters'>
						<Button color='info'>They're Real "Characters"</Button>
					</Link>
				</div>
			</header>
		</section>
	);
}
