import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props: any) => {
	const history = useHistory();
	const selectHandler = (event: any) => {
		history.push(`/${event.target.value}`);
	};
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/my_note' exact>
					REWARDS
				</NavLink>
			</li>
			<li>
				<select onChange={selectHandler}>
					<option value={"find_note"}>FIND NOTES</option>
					<option value={"upload_note"}>UPLOAD NOTE</option>
					<option value={"auth"}>AUTHENTICATE</option>
				</select>
			</li>

			<NavLink to='/profile'>
				<img
					alt='pfp'
					src='https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
					width='60px'
					height='60px'
				/>
			</NavLink>
		</ul>
	);
};

export default NavLinks;
