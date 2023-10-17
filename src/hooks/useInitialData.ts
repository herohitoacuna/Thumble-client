"use client";
import { useEffect, useState } from "react";

export const useInitialData = (page: number, limit: number) => {
	const [data, setData] = useState([]);

	const fetchData = () => {
		async () => {
			const res = await fetch(`http://localhost:3001/posts/feed?limit=${limit}&page=${page}`, {
				cache: "no-cache",
			});
			if (!res.ok) throw new Error("Failed to fetch feed data.");

			const resData = await res.json();
			console.log(resData);
			setData(resData);
		};
	};

	useEffect(() => {
		fetchData();
	}, [page, limit]);

	return data;
};
