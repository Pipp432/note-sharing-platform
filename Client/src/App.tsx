import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/login' exact>
						<Login />
					</Route>

					<Redirect to='/' />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
