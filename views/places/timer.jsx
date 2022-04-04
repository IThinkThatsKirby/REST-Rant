const React = require("react");
const db = require("../../models");
// import React, { useState } from "react";
// var avgV;
// function getAvg() {
// 	db.Comment.aggregate([
// 		{ $group: { _id: null, avg: { $avg: "$stars" } } },
// 	]).then((res) => {
// 		avgV = res[0].avg;
// 		console.log(avgV);
// 	});
// }
// getAvg();

// function Timer() {
// 	let [count, setCount] = useState(2);

// 	// this is the render vvv
//     console.log(count);
// 	return (
// 		<div>
// 			<p>You clicked {count} times</p>
// 			<button
// 				onClick={() => {
// 					setCount( count  + 1);
//                     console.log(count);
// 				}}
// 			>
// 				Click me
// 			</button>
// 		</div>
// 	);
// }



const Timer = () => {let s;
	const [counter, setCounter] = React.useState(0);

	// Emmulate componentDidMount lifecycle
	React.useEffect(() => {
		s = setInterval(() => {
			setCounter((state) => state + 1);
		}, 1000);
	}, []);

	// This is for counter state variable
	React.useEffect(() => {
		if (counter > 9) {
			clearInterval(s);
		}
	}, [counter]);

	return (<span>{counter}</span>)
};
module.exports = Timer;
