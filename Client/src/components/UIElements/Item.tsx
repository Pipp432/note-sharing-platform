import Card from "./Card";
import Button from "./Button";
import "./Item.css";
import "../UIElements/Button.css";
const Item = (props: any) => {
	const viewItemHandler = () => {
		console.log(
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit perspiciatis in, quam facilis quas iusto tempore soluta, officiis ipsam pariatur commodi saepe corporis placeat delectus, fuga ab unde animi!"
		);
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
					clickHandler={viewItemHandler}
				/>
				<Button
					label='DELETE'
					className='delete-item--button'
					clickHandler={viewItemHandler}
				/>
			</div>
		</Card>
	);
};
export default Item;
