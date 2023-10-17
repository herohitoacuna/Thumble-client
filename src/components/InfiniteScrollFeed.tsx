"use client";

import React, { useEffect, useState } from "react";
import { Post } from "./Post";

type Props = {
	category: string | undefined;
};

export const InfiniteScrollFeed = ({ category }: Props) => {
	const page = 1;
	const limit = 15;

	const [data, setData] = useState<Post[]>([]);

	const fetchData = async () => {
		const res = await fetch("http://localhost:3001/posts/feed?page=1&limit=10", { cache: "no-cache" });
		const resData = await res.json();
		setData(resData.data);
	};

	useEffect(() => {
		fetchData();
	}, [page, limit]);

	return (
		<div className="flex flex-col gap-5 w-full items-center mb-20">
			{data.map((post) => {
				const author = post.authorId;
				return (
					<Post
						key={post._id}
						author={author}
						createdAt={post.createdAt}
						title={post.title}
						content={post.content}
					/>
				);
			})}
		</div>
	);
};
