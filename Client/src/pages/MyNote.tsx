import Item from "../components/UIElements/Item";
import "./MyNote.css";
import Card from "../components/UIElements/Card";
import Button from "../components/UIElements/Button";
const MyNote = () => {
	return (
		<>
			<Card className='card-stats'>
				<h1>Catagory</h1>
				<Button label='Mechanics' className='filter-button' />
			</Card>
			<div className='item-container'>
				<Item
					title='Calculus I'
					description="A note on L'Hospital"
					alt='Cal_I.pdf'
					src='https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi'
				/>
				<Item
					title='Calculus II'
					description='Notes about Double Integral'
					alt='Cal_II.pdf'
					src='https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi'
				/>
				<Item
					title='Calculus III'
					description='Paper on Curls & Divergents from MIT'
					alt='Cal_III.pdf'
					src='https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi'
				/>
				<Item
					title='Physics'
					description='Laws of motion'
					alt='Newton.pdf'
					src='https://www.aakash.ac.in/blog/wp-content/uploads/2022/04/Blog-Image-30.jpg'
				/>
			</div>
		</>
	);
};
export default MyNote;
