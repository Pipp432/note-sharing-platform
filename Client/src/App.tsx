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

export const UserContext = createContext<GlobalContextType>(
	{} as GlobalContextType
);

function App() {
	const [userState, dispatch] = useReducer(userReducer, { Login: false });

	return (
		<div>
			<UserContext.Provider
				value={{ userState: userState, dispatch: dispatch }}
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

							<Redirect to='/' />
						</Switch>
					</main>
				</Router>
			</UserContext.Provider>
		</div>
	);
}

export default App;
