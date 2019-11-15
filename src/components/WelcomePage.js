import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

export default function WelcomePage() {
	return (
		<section className='welcome-page'>
			<Jumbotron>
				<header>
					<h1>Welcome to the ultimate fan site!</h1>
					<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Rick Sanchez' />
					<p>
						Rick and Morty is an American adult animated science fiction sitcom. The series follows the misadventures of
						cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their
						time between domestic life and interdimensional adventures.
					</p>
					<p>
						The series originated from an animated short parody film of Back to the Future, created by Roiland for
						Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its
						originality, creativity and humor.
					</p>
					<Link to='/Characters'>
						<Button color='primary'>Characters</Button>
					</Link>
				</header>
			</Jumbotron>
		</section>
		// <section className='welcome-page'>
		// 	<header>
		// 		<h1>Welcome to the ultimate fan site!</h1>
		// 		<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
		// 	</header>
		// </section>
	);
}
