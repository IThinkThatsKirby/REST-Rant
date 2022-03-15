const React = require("react");

function Def(html) {
	return (
		<html>
			<head>
				<title>Title</title>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossorigin="anonymous"
				/>
				<link rel="stylesheet" href="/css/style.css" />
			</head>
			<body>
				<div style={{ height: 92 + "vh" }}>
					{/* mess with this latter */}
                        <div className="container">
                            <div className="row">
                                <nav className="navbar">
                                    <ul>
                                        <li>
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="/places">Places</a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="/places/new">Add Place</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    
					{html.children}
				</div>
			</body>
		</html>
	);
}

module.exports = Def;
