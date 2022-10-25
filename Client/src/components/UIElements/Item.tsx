import Card from "./Card";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import "./Item.css";
import { DataContext } from "../../App";
import { useContext } from "react";
import "../UIElements/Button.css";
const Item = (props: any) => {
	const { dataState, dispatchData } = useContext(DataContext);
	const history = useHistory();
	const viewItemHandler = () => {
		console.log(
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit perspiciatis in, quam facilis quas iusto tempore soluta, officiis ipsam pariatur commodi saepe corporis placeat delectus, fuga ab unde animi!"
		);
	};
	const updateItemHandler = () => {
		history.push(`/update_notes/${props.data.id}`);
	};
	const deleteItemHandler = () => {
		console.log("hello");
		dispatchData({ type: "DELETE", payload: { id: props.data.id } });
	};
	return (
		<Card className='item-box'>
			<h3>{props.title}</h3>
			<img src={props.src} alt={props.alts} height='200' width='300' />
			<p>{props.description}</p>
			<div className='item-button--container'>
				<Button
					label='VIEW NOTE'
					className='view-item--button'
					clickHandler={viewItemHandler}
				/>
				<Button
					label='UPDATE NOTE'
					className='update-item--button'
					clickHandler={updateItemHandler}
				/>
				<Button
					label='DELETE'
					className='delete-item--button'
					clickHandler={deleteItemHandler}
				/>
			</div>
		</Card>
	);
};
export default Item;
