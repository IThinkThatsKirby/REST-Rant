const React = require("react");
const Def = require("../default");
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function new_form(data) {
	let message = "";
	if (data.message) {
		message = (
			<Stack>
				<Alert severity="error">
					{data.message}
				</Alert>
			</Stack>
		);
	}
	return (
		<Def>
			<main>
				{message}
				<h1>Add a New Place</h1>
				<form method="POST" action="/places">
					<div className="form-group">
						<label htmlFor="name">Place Name</label>
						<input className="form-control" id="name" name="name" required />
					</div>
					<div className="form-group">
						<label htmlFor="pic">Place Picture</label>
						<input className="form-control" id="pic" name="pic" />
					</div>
					<div className="form-group">
						<label htmlFor="city">City</label>
						<input className="form-control" id="city" name="city" />
					</div>
					<div className="form-group">
						<label htmlFor="state">State</label>
						<input className="form-control" id="state" name="state" />
					</div>
					<div className="form-group">
						<label htmlFor="cuisines">Cuisines</label>
						<input
							className="form-control"
							id="cuisines"
							name="cuisines"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="founded">Founded Year</label>
						<input
							type="number"
							className="form-control"
							id="founded"
							name="founded"
							value={new Date().getFullYear()}
						/>
					</div>
					<input className="btn btn-primary" type="submit" value="Add Place" />
				</form>
			</main>
		</Def>
	);
}

module.exports = new_form;
