import Card from "./Card";
import "./Item.css";
const Item = (props: any) => {
	return (
		<Card className='item-box'>
			<h3>{props.title}</h3>
			<img src={props.src} alt={props.alts} height='200' width='300' />
			<p>{props.description}</p>
		</Card>
	);
};
export default Item;
