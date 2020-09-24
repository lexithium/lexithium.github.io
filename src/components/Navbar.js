import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import logo from '../assets/img/alexLogo.png';

const SiteNavbar = (props) => {
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
						{ props.needsLinks ? <RouterLink className="nav-link" to="/#home">home</RouterLink> : <NavLink href="#home">home</NavLink> }
					</NavItem>
					<NavItem>
						{ props.needsLinks ? <RouterLink className="nav-link" to="/#about">about</RouterLink> : <NavLink href="#about">about</NavLink> }
					</NavItem>
					<NavItem>
						{ props.needsLinks ? <RouterLink className="nav-link" to="/#portfolio">portfolio</RouterLink> : <NavLink href="#portfolio">portfolio</NavLink> }
					</NavItem>
					<NavItem>
						{ props.needsLinks ? <RouterLink className="nav-link" to="/#resume">résumé</RouterLink> : <NavLink href="#resume">résumé</NavLink> }
					</NavItem>
					<NavItem>
						{ props.needsLinks ? <RouterLink className="nav-link" to="/#contact">contact</RouterLink> : <NavLink href="#contact">contact</NavLink> }
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default SiteNavbar;