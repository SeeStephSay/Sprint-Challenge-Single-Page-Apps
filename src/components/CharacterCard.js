import React from 'react';
import { Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap';
import classes from '*.module.css';

export default function CharacterCard(props) {
	// return <span>todo: character</span>;
	return (
		<Card className={classes.card}>
			<CardCta>
				<CardMedia className={classes.media} image={props.image} title='Contemplative Reptile' />
				<CardContent>
					<h2>{props.name}</h2>
					<p>
						{props.episode.length} episodes of Rick and Morty have been lucky enough to have me! I crawled out of the
						primordial ooze in {props.created}. I'm a fabulous {props.species}, and I'm totes {props.status}. I'm a
						smexy {props.gender}, and I creep around {props.location.name} on the regular.
					</p>
				</CardContent>
			</CardCta>
			<Button href={props.url} className={classes.button}>
				Check out my API!
			</Button>
		</Card>
	);
}
