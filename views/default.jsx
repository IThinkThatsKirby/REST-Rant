const React = require("react");
//MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Def(html) {
	return (
		<html>
			<head>
				<title>Title</title>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
					crossOrigin="anonymous"
				></script>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossOrigin="anonymous"></link>
				<link rel="stylesheet" href="/css/style.css" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>

			</head>
			<body>
				<div>
					{/* mess with this latter */}
					<Box
						sx={{
							justifyContent: "center",
							display: "flex",
						}}
					>
						<Button variant="contained" href="/">
							Home
						</Button>
						<Button variant="contained" href="/places">
							Places
						</Button>
						<Button variant="contained" href="/places/new">
							Add Place
						</Button>
					</Box>
					<div>{html.children}</div>
				</div>
			</body>
		</html>
	);
}

module.exports = Def;
