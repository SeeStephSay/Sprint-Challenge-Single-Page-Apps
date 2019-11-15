import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function SearchForm() {
	const [ query, setQuery ] = useState('');
	const [ data, setData ] = useState([]);

	useEffect(
		() => {
			axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
				const characters = response.data.results.filter((character) =>
					character.name.toLowerCase().includes(query.toLowerCase()),
				);
				setData(characters);
			});
		},
		[ query ],
	);

	const handleChange = (event) => {
		setData(event.target.value);
	};

	// return <section className='search-form'>// Add a search form here</section>;
	return (
		<div className='search'>
			<form>
				<label htmlFor='name'>Search:</label>
				<input id='name' type='text' name='textfield' placeholder='Search' value={query} onChange={handleChange} />
				<Link to='/'>
					<Button outline color='primary'>
						Home
					</Button>
				</Link>
			</form>
			{/* <input type='text' placeholder='Search' value={query} onChange={handleChange} />
			<ul>
				{data.map((item) => {
					<li>{item}</li>;
				})}
			</ul> */}
			{data.map((character) => {
				return (
					<CharacterCard
						key={character.id}
						name={character.name}
						species={character.species}
						status={character.status}
					/>
				);
			})}
		</div>
	);
}
