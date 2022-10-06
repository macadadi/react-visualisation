import axios from "axios";
import { useState } from "react";

const key = "bb35e2dcecc02217bdac6dc948860a74";
// const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`;
export default function useFetchData() {
	const [data, setData] = useState();
	const [status, setStatus] = useState("idle");
	const [trending, setTrending] = useState("week");

	const mutate = async () => {
		if (trending === "day") {
			setTrending("week");
		} else {
			setTrending("day");
		}
		setStatus("loading");
		setData([]);
		axios
			.get(`https://api.themoviedb.org/3/trending/movie/${trending}?api_key=${key}&language=en-US&page=1`)
			.then((res) => {
				setData(res.data.results);
				setStatus("resolved");
			})
			.catch((err) => {
				setStatus("resolved");
			});
	};
	return { mutate, status, data, trending };
}
