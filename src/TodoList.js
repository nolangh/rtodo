import React from "react";
import Todo from "./Todo";

export default function TodoList = ({ todoList }) => {
	return (
		<div>
			{todoList.map((todo) => {
				return <Todo todo={todo} />;
			})}
		</div>
	);
};

