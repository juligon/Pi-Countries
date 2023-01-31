import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "../src/pages/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Home from "../src/pages/Home/Home";
import Detail from "../src/pages/Detail/Detail";
import Form from "../src/pages/Form/Form";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/countries/:id" component={Detail} />
					<Route exact path="/activity" component={Form} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
