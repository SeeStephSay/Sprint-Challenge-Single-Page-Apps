import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
// import LocationsList from './components/LocationsList';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

export default function App() {
	return (
		<main>
			<Header />
			{/* <Switch> */}
			<Route exact path='/search' component={SearchForm} />
			<Route exact path='/' component={WelcomePage} />
			<Route path='/characters' component={CharacterList} />
			{/* <Route exact path='/LocationsList' component={LocationsList} /> */}
			{/* </Switch> */}
		</main>
	);
}
