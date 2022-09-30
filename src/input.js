// import * as React from "react";
import "./App.css";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup() {
	return (
		<div className='App'>
			<FormControl>
				<FormLabel id='gender'>Gender</FormLabel>
				<RadioGroup row>
					<FormControlLabel value='female' control={<Radio />} label='Female' />
					<FormControlLabel value='male' control={<Radio />} label='Male' />
				</RadioGroup>

				<FormLabel id='age'>Age</FormLabel>
				<FormControlLabel control={<input type='number' />} />

				<FormLabel id='height'>Height</FormLabel>
				<FormControlLabel control={<input type='number' />} label='Inches' />

				<FormLabel id='weight'>Weight</FormLabel>
				<FormLabel id='activity'>Activity</FormLabel>
			</FormControl>
		</div>
	);
}
