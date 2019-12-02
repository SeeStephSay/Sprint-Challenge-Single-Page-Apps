import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function CharacterCard(props) {
	// return <span>todo: character</span>;
	return (
		<div className='grid'>
			<div className='card'>
				<Card>
					<CardBody body inverse color='success'>
						{/*green*/}
						{/* <CardImg className='img' image={props.image} title={props.title} /> */}
						<CardTitle body className='text-center'>
							{props.name}
						</CardTitle>
						<CardText body className='text-center text-info'>
							{/* I'm a smexy {props.gender}, and I crawled out of the primordial ooze in {props.created}!*/} Sah,
							dude?! I'm a fabulous {props.species}, and I'm totes {props.status} right now.
						</CardText>
					</CardBody>
					<Button outline color='info' /*teal*/ href={props.url} className='button'>
						Check Me Out!
					</Button>
				</Card>
			</div>
		</div>
	);
}
