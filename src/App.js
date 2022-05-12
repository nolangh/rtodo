//import "./App.css";
import { useState } from "react";
import "./css/app.module.css";
//import Input from "./input";
import Header from "./Header";
import data from "./data.json";
import Todo from "./Todo";
import TodoList from "./TodoList";

export default function App() {
	const [TodoList, setTodoList] = useState(data);

	return (
		<main className="main">
			<Header />
		</main>
	);
}
