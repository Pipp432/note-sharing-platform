import { useContext } from "react";
import Card from "../components/UIElements/Card";
import { UserContext } from "../App";
import "./Profile.css";
import { Link } from "react-router-dom";
import Button from "../components/UIElements/Button";
const Profile = () => {
	const { userState } = useContext(UserContext);
	console.log(userState.username);
	return (
		<Card className='profile-card'>
			<div className='profile-container--pfp-row'>
				<div className='profile-container--pfp-column'>
					<img
						src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
						alt='pfp'
						height='200px'
						width='200px'
					/>
					<h2>Username: {userState.username}</h2>
				</div>
				<div className='profile-container--pfp-column'>
					<h1>Personal Info</h1>
					<h3>Full Name: Napatra Navanugraha</h3>
					<p style={{ color: "#6EDAEB" }}>Chulalongkorn University student</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						magnam! Nisi iure alias soluta similique cum, voluptatem fugit
						tenetur fugiat. Repellendus reiciendis temporibus porro. Odio rerum
						corporis maxime dolorum illum?
					</p>
				</div>
				<div
					className='profile-container--pfp-column'
					style={{ marginLeft: "30px" }}
				>
					<h3 style={{ marginTop: "50px" }}>Highest Education</h3>
					<p>Bachelor in Information and Communications Engineering</p>
					<h3 style={{ marginTop: "50px" }}>Residents</h3>
					<p>Bangkok, Thailand</p>
				</div>
				<div
					className='profile-container--pfp-column'
					style={{ marginLeft: "30px" }}
				>
					<h3 style={{ marginTop: "50px" }}>Contact</h3>
					<p>
						Tel: 089-xxx-xxxx <br />
						Email: Pipp423@gmail.com
					</p>

					<h3 style={{ marginTop: "50px" }}>Gender</h3>
					<p>Ligma male</p>
				</div>
			</div>
			<hr />
			<Button className='update-item--button top-right' label='EDIT' />
			<div className='profile-container--pfp-row'>
				<div className='profile-container--pfp-column'>
					<h1>Activity</h1>
				</div>

				<div
					className='profile-container--pfp-column'
					style={{ marginLeft: "30px" }}
				>
					<h3 style={{ marginTop: "60px" }}>Latest Upload</h3>
					<p>Notes on Galois fileds</p>
					<Link to='./'>Click to see!</Link>
				</div>
				<div
					className='profile-container--pfp-column'
					style={{ marginLeft: "30px" }}
				>
					<h3 style={{ marginTop: "60px" }}>Most Popular Notes</h3>
					<p>Notes on ASK, PSK, FSK</p>
					<Link to='./'>Click to see!</Link>
				</div>
				<div
					className='profile-container--pfp-column'
					style={{ marginLeft: "30px" }}
				>
					<h3 style={{ marginTop: "60px" }}>Personal Recommendation</h3>
					<p>Domian name system (DNS) and how they work</p>
					<Link to='./'>Click to see!</Link>
				</div>
			</div>
		</Card>
	);
};
export default Profile;
