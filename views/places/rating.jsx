const React = require("react");
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';

function Rate() {
	const [value, setValue] = React.useState(2);

	return (
			<div>
				<Typography component="legend">Rating</Typography>
				<Rating
					id="stars"
					name="stars"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
			</div>
	);
};

module.exports = Rate;