import "./Input.css";
import { useReducer } from "react";
const inputReducer = (state: any, action: any) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.val,
				isValid: action.val.length > 0,
			};

		case "TOUCHED":
			return {
				...state,
				isTouched: true,
			};

		default:
			return state;
	}
};
const Input = (props: any) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.initailValue || "",
		isValid: props.initialValid || false,
	});

	const changeHandler = (event: any) => {
		dispatch({
			type: "CHANGE",
			val: event.target.value,
		});
	};
	const touchHandler = () => {
		dispatch({ type: "TOUCHED" });
	};
	const inputElement =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
				className={props.className}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
				className={props.className}
			/>
		);
	return (
		<div
			className={`form-control ${
				!inputState.isValid && inputState.isTouched && "form-control--invalid"
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			{inputElement}
			{!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
		</div>
	);
};
export default Input;
