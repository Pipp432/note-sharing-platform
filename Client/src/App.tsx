import { GlobalContextType } from "./types/contextType";
import { createContext, useReducer } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainNavigation from "./components/NavElement/MainNavigation";
import MyNote from "./pages/MyNote";
import Profile from "./pages/Profile";
import FindNotes from "./pages/FindNotes";
import Upload from "./pages/Upload";
import Term from "./pages/Term";
import UpdateNotes from "./pages/note-modifications/UpdateNotes";

const userReducer = (state: any, action: any) => {
	console.log("called");
	switch (action.type) {
		case "ADD":
			return (state["user"] = {
				username: action.payload.username,
				password: action.payload.password,
				Login: action.payload.Login,
			});

		default:
			return state;
	}
};
const dataReducer = (state: any, action: any) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload.newItem];
		case "UPDATE":
			const filteredArray = state.filter(
				(e: any) => e.id !== action.payload.updatedItem.id
			);
			return [...filteredArray, action.payload.updatedItem];

		case "DELETE":
			console.log(state.filter((e: any) => e.id !== action.payload.id));
			return state.filter((e: any) => e.id !== action.payload.id);

		default:
			return state;
	}
};

export const UserContext = createContext<GlobalContextType>(
	{} as GlobalContextType
);
const DUMMY_DATA = [
	{
		key: "1",
		type: "Mathematics",
		title: "Calculus I",
		description: "A note on L'Hospital",
		alt: "Cal_I.pdf",
		src: "https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi",
		id: "1",
	},
	{
		key: "2",
		type: "Mathematics",
		title: "Calculus II",
		description: "Notes about Double Integral",
		alt: "Cal_II.pdf",
		src: "https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi",
		id: "2",
	},
	{
		key: "3",
		type: "Mathematics",
		title: "Calculus III",
		description: "Paper on Curls & Divergents from MIT",
		alt: "Cal_III.pdf",
		src: "https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi",
		id: "3",
	},
	{
		key: "4",
		type: "Science",
		title: "Physics",
		description: "Laws of motion",
		alt: "Newton.pdf",
		src: "https://www.aakash.ac.in/blog/wp-content/uploads/2022/04/Blog-Image-30.jpg",
		id: "4",
	},
];
export const DataContext = createContext<any>({});

function App() {
	const [userState, dispatch] = useReducer(userReducer, { Login: false });
	const [dataState, dispatchData] = useReducer(dataReducer, DUMMY_DATA);

	return (
		<div className='App'>
			<UserContext.Provider
				value={{ userState: userState, dispatch: dispatch }}
			>
				<DataContext.Provider
					value={{ dataState: dataState, dispatchData: dispatchData }}
				>
					<Router>
						{<MainNavigation />}
						<main>
							<Switch>
								<Route path='/' exact>
									<Login />
								</Route>

								<Route path='/term_condition' exact>
									<Term />
								</Route>
								<Route path='/home' exact>
									<Home />
								</Route>

								<Route path='/my_note' exact>
									<MyNote />
								</Route>
								<Route path='/find_note' exact>
									<FindNotes />
								</Route>
								<Route path='/upload_note' exact>
									<Upload />
								</Route>
								<Route path='/profile' exact>
									<Profile />
								</Route>
								<Route path='/update_notes/:id' exact>
									<UpdateNotes />
								</Route>

								<Redirect to='/' />
							</Switch>
						</main>
					</Router>
				</DataContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default App;
