import React, { useState } from "react";
import "./css/App.css";
import Header from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";
import { id } from "quokka/src/extension";

export default function App() {
	const [todoList, setTodoList] = useState(data);

	const handleToggle = (id) => {
		let mapped = todoList.map(task => {
			return task.id == id ? { ...task, complete: !task.complete }
		})
		setTodoList(mapped)
	}

	return (
		<main className="App">
			<Header />
			<TodoList todoList={todoList} />
		</main>
	);
}
