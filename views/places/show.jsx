const React = require("react");
const Def = require("../default");

function show(data) {
	console.log(data);
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
						<img className="col-sm-5" src={data.place.pic}></img>
						<div className="col-sm-5">
							<h1>{data.place.name}</h1>
							<div>
								<h2>Rating</h2>
								<h3>Not Rated</h3>
							</div>
							<div>
								<h2>discriptions</h2>
								<h3>{data.place.showEstablished()}</h3>
								<h4>Serving {data.place.cuisines}</h4>
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
