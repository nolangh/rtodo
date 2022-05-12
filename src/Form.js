import React, { useState } from "react";

const input = ({ addTask }) => {
	const [userInput, setuserInput] = useState("");

	const handleChange = (e) => {
		setuserInput(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(userInput);
		setuserInput("");
	};

	return (
		<div className="input-div">
			<form onSubmit={handleSubmit}>
				<input
					className="input"
					value={userInput}
					type="text"
					onChange={handleChange}
					placeholder="Enter task"
				/>
				<button className="submit-btn">Submit</button>
			</form>
		</div>
	);
};

export default input;
