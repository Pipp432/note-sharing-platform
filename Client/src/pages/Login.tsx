import Input from "../components/FormElements/Input";
import Button from "../components/UIElements/Button";
import Card from "../components/UIElements/Card";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../App";

const Login = (props: any) => {
	const { userState, dispatch } = useContext(UserContext);

	const history = useHistory();
	const submitHandler = (event: any) => {
		event.preventDefault();
		dispatch({ type: "ADD", payload: { username: "Pipp", password: "lmao" } });
		console.log(userState);
		history.push("/home");
	};
	return (
		<>
			<Card className='center'>
				<form>
					<Input
						label='Enter a username'
						errorText='Enter a valid username'
						id='username'
						type='input'
						element='input'
					/>
					<Input
						label='Enter password'
						errorText='Enter a valid password'
						id='password'
						type='password'
						element='input'
					/>
					<Button
						label='SUBMIT'
						clickHandler={submitHandler}
						className='form--button'
					/>
				</form>
			</Card>
		</>
	);
};
export default Login;
