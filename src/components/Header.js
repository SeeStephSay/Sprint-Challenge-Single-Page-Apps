import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import SearchForm from './SearchForm';

export default function Header(props) {
	return (
		<div>
			<Navbar color='info' light expand='md'>
				<NavbarBrand href='/'>Rick & Morty Fansite</NavbarBrand>
				<Nav className='mr-auto' navbar>
					<NavItem>
						<NavLink href='/characters/'>They're Real "Characters"</NavLink>
					</NavItem>
					<NavItem>
						<SearchForm />
					</NavItem>
				</Nav>
				<NavbarText>I’m Pickle Riiiick!</NavbarText>
			</Navbar>
		</div>
	);
}

{
	/*<header className='ui centered' />;*/
}
