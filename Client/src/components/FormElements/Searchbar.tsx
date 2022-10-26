import "./Searchbar.css";

const SearchBar = (searchQuery: any, setSearchQuery: any) => (
	<form action='/find_note' method='get'>
		<div className='searchFields'>
			<input
				type='text'
				id='searchbar'
				placeholder='Find notes...'
				name='s'
				autoComplete='off'
			/>
			<button id='find-button'>
				Find
			</button>
		</div>
	</form>
);

export default SearchBar;
