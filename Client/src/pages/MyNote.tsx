import Item from "../components/UIElements/Item";
import { DataContext } from "../App";
import { useState, useContext, useEffect } from "react";
import "./MyNote.css";
import Card from "../components/UIElements/Card";
import Button from "../components/UIElements/Button";

const BUTTON_DATA = [
	"Mathematics",
	"Science",
	"Gen-Ed",
	"Engineering",
	"Electives",
];

const MyNote = () => {
	const { dataState } = useContext(DataContext);
	const [, setFilter] = useState("all");
	const [data, setData] = useState(dataState);

	const filterHandler = (filter: string) => {
		setFilter(filter);
		setData(dataState.filter((e: any) => e.type === filter));
		console.log(dataState);
	};
	useEffect(() => {
		console.log(dataState);
		setData(dataState);
	}, [dataState]);

	return (
		<>
			<Card className='card-stats'>
				<h1>Category</h1>
				{BUTTON_DATA.map((e: any) => (
					<Button
						label={e}
						className='filter-button'
						clickHandler={() => {
							filterHandler(e);
						}}
					/>
				))}
			</Card>
			{data.length > 0 && (
				<div className='item-container'>
					{data.map((entries: any) => (
						<Item
							key={entries.key}
							type={entries.type}
							title={entries.title}
							description={entries.description}
							alt={entries.alt}
							src={entries.src}
							data={entries}
						/>
					))}
				</div>
			)}
			{data.length === 0 && (
				<Card className='card-no-item'>
					<h1>No Notes in this Category. Upload one?</h1>
				</Card>
			)}
		</>
	);
};
export default MyNote;
