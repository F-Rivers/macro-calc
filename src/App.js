import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import RowRadioButtonsGroup from "./Input";
import { Container } from "@mui/system";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p className='text-red'>Calculate daily micronutrient requirements</p>
				{/* this container houses the components from ./input.js */}
				<Container maxWidth='sm' className='bg-graylight'>
					<RowRadioButtonsGroup></RowRadioButtonsGroup>
				</Container>
			</header>
		</div>
	);
}

export default App;
