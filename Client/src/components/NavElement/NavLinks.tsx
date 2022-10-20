import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props: any) => {
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/my_note' exact>
					MY NOTES
				</NavLink>
			</li>
			<li>
				<NavLink to='/find_note'>FIND NOTES</NavLink>
			</li>
			<li>
				<NavLink to='/upload_note'>UPLOAD NOTE</NavLink>
			</li>
			<li>
				<NavLink to='/auth'>AUTHENTICATE</NavLink>
			</li>
			<li>
				<NavLink to='/profile'>PROFILE</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
