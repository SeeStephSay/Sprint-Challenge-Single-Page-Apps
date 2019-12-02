import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ character, setCharacter ] = useState([]);

	useEffect(() => {
		const getCharacters = () => {
			// TODO: Add API Request here - must run in `useEffect`
			axios
				.get('https://rickandmortyapi.com/api/character/')
				.then((response) => {
					setCharacter(response.data.results);
					console.log(response);
				})
				.catch((error) => {
					console.error('Oopsies: ', error);
				});
		};
		getCharacters();
		//  Important: verify the 2nd `useEffect` parameter: the dependencies array!
	}, []);

	return (
		<section className='character-list'>
			<Link to='/'>
				<Button color='primary'>Home</Button>
			</Link>
			<Link to='/search'>
				<Button color='info'>Search</Button>
			</Link>
			{/* <h2>TODO: `array.map()` over your state here!</h2> */}
			{character.map((char) => (
				<CharacterCard key={char.id} name={char.name} species={char.species} status={char.status} />
			))}
		</section>
	);
}
