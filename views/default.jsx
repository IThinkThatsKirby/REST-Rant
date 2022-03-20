const React = require("react");

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
					crossOrigin="anonymous"
				></link>
				<link rel="stylesheet" href="/css/style.css" />
			</head>
			<body>
				<div>
					{/* mess with this latter */}
					<div className="container-fluid">
						<div className="row">
							<nav className="dropdown">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton2"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Navigate our site
								</button>
								<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
									<li>
										<a className="dropdown-item" href="/">
											Home
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/places">
											Places
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/places/new">
											Add Place
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div>{html.children}</div>
				</div>
			</body>
		</html>
	);
}

module.exports = Def;
