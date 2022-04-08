const React = require("react");
// import React, { useState } from "react";
const Def = require("../default");
const Rate = require("./rating");
// const Timer = require("./timer");
import Counting from "./timer2";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const db = require("../../models");
// import { useState, useEffect } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// const [counter, setCounter] = React.useState(2);
// // export default function BasicRating() {
// // 	const [value, setValue] = React.useState(2);
// const x = () =>{

// 	// Emmulate componentDidMount lifecycle
// 	React.useEffect(() => {
// 		s = setInterval(() => {
// 			setCounter((state) => state + 1);
// 		}, 1000);
// 	}, []);

// 	// This is for counter state variable
// 	React.useEffect(() => {
// 		if (counter > 9) {
// 			clearInterval(s);
// 		}
// 	}, [counter]);
// 	return ({counter})
// }
// console.log(x)

function show(data, html) {
	// data is already pointing at .place
	let comments = <h3 className="inactive">No comments yet!</h3>;
	if (data.comments.length) {
		comments = data.comments.map((c) => {
			return (
				<div className="border">
					<h2 className="rant">
						{c.rant ? "Rant! :(	" : "Rave! :D	"}{" "}
						<Typography component="legend">User Ratings:</Typography>
						<Rating name="read-only" value={c.stars} readOnly />
					</h2>
					<h4> {c.content} </h4>
					<h3 className="row justify-content-end">
						<strong className="col-sm-5">-{c.author}</strong>
					</h3>
					<h4></h4>
				</div>
			);
		});
	}
	return (
		<Def>
			<main>
				<div className="container">
					<div className="row">
						<div className="col-sm-2">
							<a href={`/places/${data.id}/edit`} className="btn btn-warning">
								Edit
							</a>
							<form method="POST" action={`/places/${data.id}?_method=DELETE`}>
								<button type="submit" className="btn btn-danger">
									Delete
								</button>
							</form>
						</div>
						<div></div>
						<Counting>{html.children}</Counting>
						<img className="col-sm-5" src={data.pic}></img>
						<div className="col-sm-5">
							<h1>{data.name}</h1>
							<div>
								<h2>Rating</h2>
								<Rating name="read-only" value={1.5} readOnly />
							</div>
							<div>
								<h2>discriptions</h2>
								<h3>{data.showEstablished()}</h3>
								<h4>Serving {data.cuisines}</h4>
							</div>
						</div>
					</div>
					<div className="row">
						<div>
							<h2>Got Your Own Rant or Rave?</h2>
							<form action={`/places/${data.id}/comment`} method="POST">
								<div className="row">
									<div className="form-group col-sm-12">
										<label htmlFor="content">Content</label>
										<textarea
											id="content"
											name="content"
											className="form-control"
										></textarea>
									</div>
								</div>
								<div className="row">
									<div className="form-group col-sm-4">
										<label htmlFor="author">Author</label>
										<input id="author" name="author" className="form-control" />
									</div>
									<div className="form-group col-sm-4">
										{/* <label htmlFor="stars">Star Rating</label>
										<input
											type="range"
											step="0.5"
											min="1"
											max="5"
											id="stars"
											name="stars"
											className="form-control"
										/> */}
										<Rate>{html.children}</Rate>
										{/* <Typography component="legend">Controlled</Typography>
										<Rating
											name="simple-controlled"
											value={value}
											onChange={(event, newValue) => {
												setValue(newValue);
											}}
										/> */}
									</div>
									<div className="form-group col-sm-2">
										<input
											className="form-check-input"
											type="checkbox"
											value="true"
											name="rant"
											id="rant"
										/>

										<label className="form-check-label" htmlFor="rant">
											Rant?
										</label>
									</div>
								</div>
								<input
									type="submit"
									className="btn btn-primary"
									value="Add Comment"
								/>
							</form>
						</div>
						<h1>COMMENTS</h1>
						{comments}
					</div>
				</div>
			</main>
		</Def>
	);
}

module.exports = show;

// im copying and pasting the sorta working show page from the "answer"

// const React = require("react");
// const Def = require("../default");

// function show(data) {
// 	let comments = <h3 className="inactive">No comments yet!</h3>;
// 	let rating = <h3 className="inactive">Not yet rated</h3>;
// 	if (data.comments.length) {
// 		let sumRatings = data.comments.reduce((tot, c) => {
// 			return tot + c.stars;
// 		}, 0);
// 		let averageRating = Math.round(sumRatings / data.comments.length);
// 		let stars = "";
// 		for (let i = 0; i < averageRating; i++) {
// 			stars += "⭐️";
// 		}
// 		rating = <h3>{stars} stars</h3>;
// 		comments = data.comments.map((c) => {
// 			return (
// 				<div className="border col-sm-4">
// 					<h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
// 					<h4>{c.content}</h4>
// 					<h3>
// 						<stong>- {c.author}</stong>
// 					</h3>
// 					<h4>Rating: {c.stars}</h4>
// 					<form
// 						method="POST"
// 						action={`/places/${data.id}/comment/${c.id}?_method=DELETE`}
// 					>
// 						<input
// 							type="submit"
// 							className="btn btn-danger"
// 							value="Delete Comment"
// 						/>
// 					</form>
// 				</div>
// 			);
// 		});
// 	}
// 	return (
// 		<Def>
// 			<main>
// 				<div className="row">
// 					<div className="col-sm-6">
// 						<img src={data.pic} alt={data.name} />
// 						<h3>
// 							Located in {data.city}, {data.state}
// 						</h3>
// 					</div>
// 					<div className="col-sm-6">
// 						<h1>{data.name}</h1>
// 						<h2>Rating</h2>
// 						{rating}
// 						<br />
// 						<h2>Description</h2>
// 						<h3>{data.showEstablished()}</h3>
// 						<h4>Serving {data.cuisines}</h4>
// 						<br />
// 						<a href={`/places/${data.id}/edit`} className="btn btn-warning">
// 							Edit
// 						</a>
// 						{` `}
// 						<form method="POST" action={`/places/${data.id}?_method=DELETE`}>
// 							<button type="submit" className="btn btn-danger">
// 								Delete
// 							</button>
// 						</form>
// 					</div>
// 				</div>
// 				<hr />
// 				<h2>Comments</h2>
// 				<div className="row">{comments}</div>
// 				<hr />
// 				<h2>Got Your Own Rant or Rave?</h2>
// 				<form action={`/places/${data.id}/comment`} method="POST">
// 					<div className="row">
// 						<div className="form-group col-sm-12">
// 							<label htmlFor="content">Content</label>
// 							<textarea
// 								id="content"
// 								name="content"
// 								className="form-control"
// 							></textarea>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="form-group col-sm-4">
// 							<label htmlFor="author">Author</label>
// 							<input id="author" name="author" className="form-control" />
// 						</div>
// 						<div className="form-group col-sm-4">
// 							<label htmlFor="stars">Star Rating</label>
// 							<input
// 								type="range"
// 								step="0.5"
// 								min="1"
// 								max="5"
// 								id="stars"
// 								name="stars"
// 								className="form-control"
// 							/>
// 						</div>
// 						{/* fixed the dumb check box and Rant now returns boolean */}
// 						<div className="form-check col-sm-1">
// 							<input
// 								type="checkbox"
// 								id="rant"
// 								name="rant"
// 								value="true"
// 								className="form-check-input"
// 							/>
// 							<label htmlFor="rant">Rant?</label>
// 						</div>
// 					</div>
// 					<input
// 						type="submit"
// 						className="btn btn-primary"
// 						value="Add Comment"
// 					/>
// 				</form>
// 			</main>
// 		</Def>
// 	);
// }

// module.exports = show;
