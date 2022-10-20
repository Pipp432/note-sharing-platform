import { useContext } from "react";
import { UserContext } from "../App";
import Button from "../components/UIElements/Button";
import Card from "../components/UIElements/Card";
import "./Home.css";
const Home = (props: any) => {
	const { userState } = useContext(UserContext);
	console.log(userState);

	return (
		<Card className='home--center'>
			Hello, {userState.username}
			<p>
				Welcome to Notable, a knowledge sharing place. By students, For students
			</p>
			<Button className='start--button' label="Let's Start" />
		</Card>
	);
};
export default Home;
