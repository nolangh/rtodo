//import "./App.css";
import { useState } from "react";
import "./css/app.module.css";
//import Input from "./input";
import Header from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";

export default function App() {
	const [todoList, setTodoList] = useState(data);

	return (
		<main className="App">
			<Header />
			<TodoList todoList={todoList} />
		</main>
	);
}
