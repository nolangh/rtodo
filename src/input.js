import { useState } from "react";

export default function Input() {
	const [text, setText] = useState("");
	const [todos, setTodos] = useState([]);

	const handleChange = (e) => {
		const listItem = e.target.value;
		if (listItem.length > 30) return;
		setText(listItem);
		console.log(listItem);
	};

	const addListItem = () => {
		setTodos(() => {
			const newTodo = [...todos, text];
			return newTodo;
		});
		console.log(todos);
	};

	return (
		<div className="input-div">
			<input
				type="text"
				className="todo-input"
				onChange={handleChange}
				value={text}
			/>
			<button onClick={addListItem} className="submit-button">
				Submit
			</button>
		</div>
	);
}
