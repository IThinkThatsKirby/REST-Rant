const React = require("react");
const Def = require("./default");
//MUI imports
import Box from "@mui/material/Box";

function home() {
	return (
		<Def>
			<main>
				<h1>REST-Rant</h1>
				<Box sx={{ justifyContent: "center", display: "flex", width: "25vh"}}>
					<img src="/images/cheesePizza.jpg" alt="IS CHEESE PIZZA" />
				</Box>{" "}
				<Box sx={{ justifyContent: "center", display: "flex" }}>
					Photo by{" "}
					<a sx={{ width: 1/4 }} href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Ivan Torres
					</a>{" "}
					on{" "}
					<a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Unsplash
					</a>
				</Box>
				{/*  redudant since i want a nav bar to be the same across all pages also use bootstrap for this */}
				<nav id="homeBtn">
					<a href="/places">
						<button className="btn-primary">Places Page</button>
					</a>
				</nav>
			</main>
		</Def>
	);
}

module.exports = home;
