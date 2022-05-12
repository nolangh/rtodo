import React, { useState } from "react";

const Input = ({ addTask }) => {
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
	);
};

export default Input;
