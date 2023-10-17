"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const search = searchParams.get("user") || searchParams.get("post") || "";

	const [searchInput, setSearchInput] = useState(search);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handleClearInput = () => {
		router.replace("/");
		setSearchInput("");
	};

	useEffect(() => {
		if (searchInput) {
			setTimeout(() => {
				router.push(`?user=${searchInput}`);
			}, 300);
		} else {
			router.replace("/");
		}
	}, [searchInput]);

	return (
		<div className="flex items-center gap-2 py-1 rounded-md bg-white relative">
			<button className="pl-2 p-2 rounded-full hover:bg-slate-400/20">
				<BsSearch className="text-slate-900 cursor-pointer" />
			</button>
			<input
				type="text"
				placeholder="Search Here"
				value={searchInput}
				onChange={handleChange}
				className="outline-none text-black bg-white w-[350px] peer"
			/>
			<button
				onClick={handleClearInput}
				className="peer-focus:visible invisible p-2 rounded-full hover:bg-slate-400/20">
				<RxCross2 className="text-slate-900 cursor-pointer" />
			</button>

			<div className="peer-focus:visible invisible h-[200px] w-full bg-slate-400 absolute top-[3rem] text-black">
				Results
			</div>
		</div>
	);
};
