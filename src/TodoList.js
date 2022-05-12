import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, handleToggle }) => {
	return (
		<div>
			{todoList.map((todo) => {
				return (
					<Todo
						todo={todo}
						//handleFilter={handleFilter}
						handleToggle={handleToggle}
					/>
				);
			})}
			{/* <button className="btn" onClick={handleFilter}>
				Clear Completed Tasks
			</button> */}
		</div>
	);
};

export default TodoList;
