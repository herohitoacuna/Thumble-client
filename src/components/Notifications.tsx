import { IoNotificationsSharp } from "react-icons/io5";

export const Notifications = () => {
	return (
		<div className="relative">
			<div className="w-3 h-3 bg-red-500 rounded-full absolute right-0 -top-1 border-[1px] border-white"></div>
			<IoNotificationsSharp className="text-2xl hover:text-slate-400 cursor-pointer" />
		</div>
	);
};
