import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import RowRadioButtonsGroup from "./input";
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<TextField id='outlined-basic' label='Enter Age' variant='outlined' />
				<RowRadioButtonsGroup></RowRadioButtonsGroup>
			</header>
		</div>
	);
}

export default App;
