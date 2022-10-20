import "./Button.css";

const Button = (props: any) => {
	return (
		<>
			<button className={props.className} onClick={props.clickHandler}>
				{props.label}
			</button>
		</>
	);
};
export default Button;
