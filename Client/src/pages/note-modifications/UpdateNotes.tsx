import Card from "../../components/UIElements/Card";
import React, { useContext, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./UpdateNotes.css";
import Button from "../../components/UIElements/Button";

import { DataContext } from "../../App";
type idParam = {
	id: string;
};
const UpdateNotes = () => {
	const { dataState, dispatchData } = useContext(DataContext);
	const history = useHistory();
	const { id } = useParams<idParam>();
	const data = dataState.filter((e: any) => e.id === id);
	console.log(data[0]);

	const updateHandler = () => {
		const update = data[0];
		console.log(update);
		dispatchData({ type: "UPDATE", payload: { updatedItem: update } });
		history.push("/my_note");
	};

	const changeTitleHandler = (event: any) => {
		data[0]["title"] = event.target.value;
	};
	const changeDescriptionHandler = (event: any) => {
		data[0]["description"] = event.target.value;
	};
	return (
		<Card className='update-card'>
			<h1> Update Notes</h1>
			<label htmlFor='title'>Title</label>
			<br />
			<input
				type='input'
				defaultValue={data[0].title}
				id='title'
				onBlur={changeTitleHandler}
			/>
			<br />
			<label htmlFor='description'>Description</label>
			<input
				type='textarea'
				defaultValue={data[0].description}
				id='description'
				onBlur={changeDescriptionHandler}
			/>

			<label htmlFor='content'>Contents</label>

			<input type='file' name='content' style={{ borderRadius: "0px" }} />

			<Button
				label='UPDATE'
				className='form--button middle-bottom'
				clickHandler={() => {
					updateHandler();
				}}
			/>
		</Card>
	);
};
export default UpdateNotes;
