import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import Button from "../components/UIElements/Button";
import Card from "../components/UIElements/Card";
import "./Home.css";
const Home = (props: any) => {
	const history = useHistory();
	const { userState } = useContext(UserContext);
	const goToNotesHandler = () => {
		history.push("/my_note");
	};

	return (
		<Card className='home--center'>
			Hello, {userState.username}
			<p>
				Welcome to ChulaNote, a knowledge sharing place. By students, For
				students
			</p>
			<Button
				className='start--button'
				label="Let's Start"
				clickHandler={goToNotesHandler}
			/>
		</Card>
	);
};
export default Home;
