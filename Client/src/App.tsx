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

const userReducer = (state: any, action: any) => {
	switch (action.type) {
		case "ADD":
			return (state["user"] = {
				username: action.payload.username,
				password: action.payload.password,
			});

		default:
			return state;
	}
};

export const UserContext = createContext<GlobalContextType>(
	{} as GlobalContextType
);

function App() {
	const [userState, dispatch] = useReducer(userReducer, {});

	return (
		<div>
			<UserContext.Provider
				value={{ userState: userState, dispatch: dispatch }}
			>
				<Router>
					<MainNavigation />
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/login' exact>
							<Login />
						</Route>
						<Route path='/my_note' exact>
							<Login />
						</Route>
						<Route path='/find_note' exact>
							<Login />
						</Route>
						<Route path='/upload_note' exact>
							<Login />
						</Route>
						<Route path='/auth' exact>
							<Login />
						</Route>

						<Redirect to='/' />
					</Switch>
				</Router>
			</UserContext.Provider>
		</div>
	);
}

export default App;
