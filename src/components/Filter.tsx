import Link from "next/link";

const categories = ["Social", "Science", "Math", "Technology", "Reasearch", "Music", "Movie"];

export const Filter = () => {
	return (
		<>
			<nav className="w-[170px]">
				<ul className="bg-white rounded-md p-3">
					{categories.map((category, index) => (
						<Link href={`?ct=${category.toLowerCase()}`}>
							<li
								key={index}
								className="hover:bg-gray-200 py-1 rounded-md flex justify-center">
								{category}
							</li>
						</Link>
					))}
				</ul>
			</nav>

			<Rights />
		</>
	);
};

const Rights = () => {
	return (
		<div className="w-full mt-5 max-w-[160px]">
			<p className="text-xs text-slate-500 break-words">ⓒ 2023 Herohito Acuña | All rights reserved. </p>
		</div>
	);
};
