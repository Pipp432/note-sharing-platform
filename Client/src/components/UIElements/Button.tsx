import "./Button.css";
const Button = (props: any) => {
	return (
		<>
			<button
				className={`form--button ${props.className}`}
				onClick={props.clickHandler}
			>
				{props.label}
			</button>
		</>
	);
};
export default Button;
