import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { Button } from 'reactstrap';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ character, setCharacter ] = useState([]);

	useEffect(() => {
		const getCharacters = () => {
			axios
				.get("https://rickandmortyapi.com/api/character/")
				.then((response) => {
					setCharacter(response.data.results);
					console.log('Data results: ', response);
				})
				.catch((error) => {
					console.log('Server error', error);
				});
		};
		getCharacters();
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependencies array!
	}, []);

	return (
		<section className='character-list'>
			<Link to='/search'>
				<Button color='warning'>Search</Button>
			</Link>
			{character.map((char) => (
				<CharacterCard key={char.id} name={char.name} species={char.species} status={char.status} />
			))}
		</section>
	);
}
