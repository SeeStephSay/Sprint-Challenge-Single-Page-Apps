import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ characters, setCharacters ] = useState([]);
	const [ choice, setChoice ] = useState('');

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		axios
			.get('https://rickandmortyapi.com/api/character/')
			.then((response) => {
				const characterData = response.data.results;
				setCharacters(characterData);
				console.log(characterData);
			})
			.catch((error) => {
				console.error('Oopsies: ', error);
			});
		//  Important: verify the 2nd `useEffect` parameter: the dependencies array!
	}, []);

	return (
		<section className='character-list'>
			<h2>TODO: `array.map()` over your state here!</h2>
		</section>
	);
}
