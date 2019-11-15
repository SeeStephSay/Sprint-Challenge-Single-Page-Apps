import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
import { Button } from 'reactstrap';

export default function WelcomePage() {
	return (
		<main>
			<Header />
			<section className='welcome-page'>
				<header>
					<div className='centered'>
						<div className='transbox'>
							<p>ALL ABOUT RICK AND MORTY</p>
						</div>
						<Link to='/LocationsList'>
							<Button className='margin'>Character</Button>
						</Link>
					</div>
				</header>
			</section>
		</main>
		// <section className='welcome-page'>
		// 	<header>
		// 		<h1>Welcome to the ultimate fan site!</h1>
		// 		<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
		// 	</header>
		// </section>
	);
}
