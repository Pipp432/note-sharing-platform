import Input from "../components/FormElements/Input";
import Button from "../components/UIElements/Button";
import Card from "../components/UIElements/Card";
import "./Login.css";

const Login = (porps: any) => {
	const submitHandler = (event: any) => {
		event.preventDefault();
		console.log("Hello");
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
						type='input'
						element='input'
					/>
					<Button label='SUBMIT' clickHandler={submitHandler} />
				</form>
			</Card>
		</>
	);
};
export default Login;
