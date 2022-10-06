export const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<span className="label">
					<b>Title:</b> {label} <br />
				</span>
				<span className="desc">
					<strong>Ratings:</strong>
					{payload[0].payload.vote_average} <br />
				</span>
				<span className="label">
					<b>Popularity:</b>
					{payload[0].value}
				</span>
			</div>
		);
	}

	return null;
};
