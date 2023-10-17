import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { Notifications } from "./Notifications";
import { Search } from "./Search";
import { Avatar } from "./Avatar";
import { Tooltip } from "./Tooltip";

export const Navbar = () => {
	return (
		<nav className="w-[1024px] text-white flex justify-between items-center z-50">
			<Link
				href={"/"}
				className="text-2xl font-bold">
				Th<span className="text-lg">UMBLE</span>.
			</Link>

			<Search />

			<div className="flex justify-between items-center text-sm gap-5">
				<Tooltip text="Home">
					<Link
						href={"/"}
						className="text-2xl hover:opacity-80">
						<AiFillHome />
					</Link>
				</Tooltip>

				<Tooltip text="Notifications">
					<Notifications />
				</Tooltip>

				<Tooltip text="Setting">
					<Avatar />
				</Tooltip>
			</div>
		</nav>
	);
};
