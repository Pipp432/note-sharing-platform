import Item from "../components/UIElements/Item";
import { useEffect, useState } from "react";
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
const DUMMY_DATA = [
	{
		key: "1",
		type: "Mathematics",
		title: "Calculus I",
		description: "A note on L'Hospital",
		alt: "Cal_I.pdf",
		src: "https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi",
	},
	{
		key: "2",
		type: "Mathematics",
		title: "Calculus II",
		description: "Notes about Double Integral",
		alt: "Cal_II.pdf",
		src: "https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi",
	},
	{
		key: "3",
		type: "Mathematics",
		title: "Calculus III",
		description: "Paper on Curls & Divergents from MIT",
		alt: "Cal_III.pdf",
		src: "https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi",
	},
	{
		key: "4",
		type: "Science",
		title: "Physics",
		description: "Laws of motion",
		alt: "Newton.pdf",
		src: "https://www.aakash.ac.in/blog/wp-content/uploads/2022/04/Blog-Image-30.jpg",
	},
];

const MyNote = () => {
	const [, setFilter] = useState("all");
	const [data, setData] = useState(DUMMY_DATA);
	const filterHandler = (filter: string) => {
		setFilter(filter);
		setData(DUMMY_DATA.filter((e) => e.type === filter));
		console.log(data);
	};

	return (
		<>
			<Card className='card-stats'>
				<h1>Catagory</h1>
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
					{data.map((entries) => (
						<Item
							key={entries.key}
							type={entries.type}
							title={entries.title}
							description={entries.description}
							alt={entries.alt}
							src={entries.src}
						/>
					))}
				</div>
			)}
			{data.length === 0 && (
				<Card className='card-no-item'>
					<h1>No Notes in this Catagory. Upload one?</h1>
				</Card>
			)}
		</>
	);
};
export default MyNote;
