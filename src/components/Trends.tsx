import Link from "next/link";
import React from "react";

export const Trends = async () => {
	const trends = ["Learn ReactJS", "Lear NextJs", " Learn NestJs", "Learn Javascript", "Learn How to Drive a Car"];

	return (
		<section className="bg-white p-4 rounded-md w-full">
			<h4 className="font-semibold tracking-wide text-lg">Trends</h4>
			<ul>
				{trends.map((trend, index) => (
					<Link
						href={""}
						key={index}>
						<li className="hover:bg-gray-200 rounded-md px-2 py-1 truncate">{trend}</li>
					</Link>
				))}
			</ul>
		</section>
	);
};
