import Button from "../components/UIElements/Button";
import { useHistory } from "react-router-dom";
import "./Term.css";
const Term = () => {
	const history = useHistory();
	const acceptHandler = () => {
		history.push("/my_note");
	};
	return (
		<>
			<div className='term-title'>Terms & Conditions</div>
			<div className='term-content'>
				<li>You have to post a note to access another ten notes.</li>
				<li>Free drink every 40 downloads of your notes! </li>
				<li>
					Got a chance to receive the certification from Chulalongkorn
					University!
				</li>
			</div>
			<Button
				label='ACCEPT'
				className='form--button middle'
				clickHandler={acceptHandler}
			/>
		</>
	);
};
export default Term;
