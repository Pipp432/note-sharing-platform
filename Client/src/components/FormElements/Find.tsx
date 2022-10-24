import SearchBar from "./Searchbar";

const Find = () => {
    return (
        <>
            <SearchBar />
        </>
    )
}

interface FindProps {
    searchQuery: any
    setSearchQuery: any
}

export default Find;