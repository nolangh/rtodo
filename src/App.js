import React, { useState } from "react";
import "./css/App.css";
import Header from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";
import Form from "./Form";

export default function App() {
	const [todoList, setTodoList] = useState(data);

	const handleToggle = (id) => {
		let mapped = todoList.map((task) => {
			return task.id == id
				? { ...task, complete: !task.complete }
				: { ...task };
		});
		setTodoList(mapped);
	};

	const handleFilter = () => {
		let filtered = todoList.filter((task) => {
			return !task.complete;
		});
		setTodoList(filtered);
	};

	return (
		<main className="App">
			<Header />
			<TodoList
				todoList={todoList}
				handleToggle={handleToggle}
				handleFilter={handleFilter}
			/>
			<Form addTask={addTask} />
		</main>
	);
}
