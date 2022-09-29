import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import RowRadioButtonsGroup from "./input";
import { Container } from "@mui/system";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Container maxWidth='sm' className='bg-graylight'>
					<RowRadioButtonsGroup></RowRadioButtonsGroup>
				</Container>
			</header>
		</div>
	);
}

export default App;
