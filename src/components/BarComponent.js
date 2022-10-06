import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useFetchData from "../hooks/useFetchData";

import { CustomTooltip } from "./CustomToolTip";
import "./style.css";

export default function BarComponent() {
	const { data, status, mutate, trending } = useFetchData();

	return (
		<div>
			<div className="BarContainer">
				<div className="BarChartContainer">
					<h3>Bar graph showing movie title against popularity </h3>
					<ResponsiveContainer width={"100%"} height={400}>
						<BarChart width={1200} height={1200} data={data}>
							<XAxis dataKey="title" tickLine={false} />
							<YAxis label={{ value: "Popularity", angle: -90, position: "insideLeft", textAnchor: "middle" }} />
							<Tooltip content={<CustomTooltip />} />
							<Legend position={"right"} />
							<Bar dataKey="popularity" fill="green" />
						</BarChart>
					</ResponsiveContainer>
					<p>Movie Title</p>
				</div>
				<div>
					{" "}
					{status === "resolved" && (
						<form>
							<small>Simple form </small> <br />
							<input />
							<br />
							<input />
							<br />
							<button>Submit</button>
						</form>
					)}
				</div>
			</div>
			<button onClick={mutate}>
				{status === "resolved" ? `Fetch per ${trending}` : status === "loading" ? "Loading..." : `Fetch data`}
			</button>
		</div>
	);
}
