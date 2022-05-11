import { useState, useEffect } from "react";

export default function List() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(`you have clicked ${count} times`);
	});

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
