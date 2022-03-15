const React = require("react");
const Def = require("../default");

function show(data) {
	return (
		<Def>
			<main>
				<div className="container">
					<div className="row">
                        <img className="col-sm-6" src={data.place.pic}></img>
						<div className="col-sm-6">
							<h1>{data.place.name}</h1>
							<div>
								<h2>Rating</h2>
								<h3>Not Rated</h3>
							</div>
							<div>
								<h2>discriptions</h2>
								<h3>location state city couisienes</h3>
							</div>
						</div>
					</div>
                    <div className="row">
                        <h1>COMMENTS</h1>
                    </div>
				</div>
			</main>
		</Def>
	);
}

module.exports = show;

module.exports = show;
