//import "./App.css";
import "./css/app.module.css";
import Input from "./input";
import List from "./list";

export default function App() {
	//const [myTodos, set] = useState([]);
	// setMyTodos((currTodos) => {
	// 	currTodos.push("new todo");
	// 	return currTodos;
	// });
	return (
		<main className="main">
			<h1> TODO List</h1>
			<Input />
			<List />
		</main>
	);
}
