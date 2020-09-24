import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../assets/img/alexLogo.png';

const SiteNavbar = () => {
	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<Navbar color="white" light expand="md" className="align-items-start">
			<NavbarBrand href="/">
				<div className="text-center">
					<img className="logo" src={logo} alt="" aria-hidden="true" />
					<h1 className="name"><strong className="text-primary">Alex</strong>is N. Shocklee</h1>
				</div>
			</NavbarBrand>
			<NavbarToggler onClick={ () => setIsOpen( !isOpen ) } />
			<Collapse isOpen={ isOpen } navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavHashLink to="/" className="nav-link">home</NavHashLink>
					</NavItem>
					<NavItem>
						<NavHashLink to="/#about" className="nav-link">about</NavHashLink>
					</NavItem>
					<NavItem>
						<NavHashLink to="/#portfolio" className="nav-link">portfolio</NavHashLink>
					</NavItem>
					<NavItem>
						<NavHashLink to="/#resume" className="nav-link">résumé</NavHashLink>
					</NavItem>
					<NavItem>
						<NavHashLink to="/#contact" className="nav-link">contact</NavHashLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default SiteNavbar;