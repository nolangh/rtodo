//import "./App.css";
import "./css/app.module.css";
import Input from "./input";

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
		</main>
	);
}
