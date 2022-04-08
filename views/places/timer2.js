import React, { useState } from "react";
import Button from "./Button";

export default function Counting() {
	const [count, setCount] = useState(5);

	let incrementCount = () => {
		setCount(count + 1);
	};

	let decrementCount = () => {
		setCount(count - 1);
	};

	return (
		<div className="app">
			<div>
				<div className="count">
					<h3>Count:</h3>
					<h1>{count}</h1>
				</div>
				<div className="buttons">
					<Button title={"-"} action={decrementCount} />
					<Button title={"+"} action={incrementCount} />
				</div>
			</div>
		</div>
	);
}
