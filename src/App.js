import React from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LocationsList from './components/LocationsList';
import CharacterList from './components/CharacterList';

export default function App() {
	return (
		<main>
			<Header />
			<Route exact path='/' component={WelcomePage} />
			<Route path='/CharacterList' component={CharacterList} />
			<Route path='/LocationsList' component={LocationsList} />
		</main>
	);
}
