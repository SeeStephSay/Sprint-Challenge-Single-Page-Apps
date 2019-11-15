import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, Button } from 'reactstrap';

export default function CharacterCard(props) {
	// return <span>todo: character</span>;
	return (
		<Card className='card'>
			<CardBody>
				<CardImg className='img' image={props.image} title='TITLE' />
				<CardText>
					<h2>{props.name}</h2>
					<p>
						{props.episode.length} episodes of Rick and Morty have been lucky enough to have me! I crawled out of the
						primordial ooze in {props.created}. I'm a fabulous {props.species}, and I'm totes {props.status}. I'm a
						smexy {props.gender}, and I creep around {props.location.name} on the regular.
					</p>
				</CardText>
			</CardBody>
			<Button outline color='primary' href={props.url} className='button'>
				Check out my API!
			</Button>
		</Card>
	);
}
