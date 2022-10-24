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
		dispatch({
			type: "ADD",
			payload: { username: "Pipp", password: "lmao", Login: true },
		});
		console.log(userState);
		history.push("/home");
	};
	return (
		<>
			<div className='login-title'>
				<span className='title'>Chula</span>Notes
				<br />
				<div className='sub-title'>
					Notes - Sharing Platform for CU Students
				</div>
			</div>
			<div className='center'>
				<form>
					<Input
						label='Email'
						errorText='Enter a valid username'
						id='username'
						type='input'
						element='input'
						placeholder='name@email.com'
					/>
					<Input
						label='Password'
						errorText='Enter a valid password'
						id='password'
						type='password'
						element='input'
						placeholder='Enter your password'
					/>
					<Button
						label='LOGIN'
						clickHandler={submitHandler}
						className='form--button'
					/>
				</form>
			</div>
			<Card className='center-below'>
				<div className='img-container'>
					<img
						src='https://play-lh.googleusercontent.com/0luBuKQvAQQA3s1nyw1q-xOmIGeWXDAKeXUo6IrrZTt90-pFihfCoEjEJmnSWIy5kr4'
						alt='CUNEX'
						width='50px'
						height='50px'
					/>
					<img
						src='https://cdn-icons-png.flaticon.com/512/124/124010.png'
						alt='facebook'
						width='50px'
						height='50px'
					/>
					<img
						src='https://pbs.twimg.com/media/ElXTrHcXEAACIZE?format=jpg&name=small'
						alt='Gmail'
						width='50px'
						height='50px'
					/>
				</div>
			</Card>

			<div className='signUp'>New to ChulaNotes? Sign up</div>
		</>
	);
};
export default Login;
