import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

export default function Header(props) {
	return (
		<div>
			<Navbar color='info' light expand='md'>
				<NavbarBrand href='/'>Rick & Morty Fansite</NavbarBrand>
				<Nav className='mr-auto' navbar>
					<NavItem>
						<NavLink href='/characters/'>We're Real "Characters"</NavLink>
					</NavItem>
				</Nav>
				<NavbarText>I’m Pickle Riiiick!</NavbarText>
			</Navbar>
		</div>
	);
}
