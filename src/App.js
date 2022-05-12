import React, { useState } from "react";
import "./css/App.css";
import Header from "./Header";
//import data from "./data.json";
import TodoList from "./TodoList";
import Input from "./Form";

export default function App() {
	const [todoList, setTodoList] = useState([]);

	const handleToggle = (id) => {
		let mapped = todoList.map((task) => {
			return task.id === id
				? { ...task, complete: !task.complete }
				: { ...task };
		});
		setTodoList(mapped);
	};

	// const handleFilter = () => {
	// 	let filtered = todoList.filter((task) => {
	// 		return !task.complete;
	// 	});
	// 	setTodoList(filtered);
	// };

	const addTask = (userInput) => {
		let copy = [...todoList];
		copy = [
			...copy,
			{ id: todoList.length + 1, task: userInput, complete: false },
		];
		setTodoList(copy);
	};

	return (
		<main className="App">
			<Header />
			<TodoList
				todoList={todoList}
				handleToggle={handleToggle}
				// handleFilter={handleFilter}
			/>
			<Input addTask={addTask} />
		</main>
	);
}
