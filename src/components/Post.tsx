import { convertToTitleCase } from "@/libs/titleCase";
import { MdOutlineModeComment } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import Link from "next/link";
import { formatDate } from "@/libs/dateFormat";
import { Tooltip } from "./Tooltip";
import { useRef } from "react";

type UserDetails = {
	_id: string;
	firstname: string;
	lastname: string;
	photo: string;
};

enum Tags {}

export type Post = {
	_id: string;
	authorId: UserDetails;
	title: string;
	content: string;
	tags: Tags[] | [];
	createdAt: Date;
	lastModified: Date;
};

type PostProps = {
	author: UserDetails;
	createdAt: Date;
	content: string;
	title: string;
};
type PostHeadProps = {
	_id: string;
	firstname: string;
	lastname: string;
	photo: string;
	postCreated: Date;
};

export const Post = (props: PostProps) => {
	const { author, createdAt, content, title } = props;

	return (
		<div className="w-full bg-white rounded-md flex flex-col gap-1">
			<div className=" p-2 w-full flex flex-col items-center">
				<PostHead
					_id={author._id}
					firstname={convertToTitleCase(author.firstname)}
					lastname={convertToTitleCase(author.lastname)}
					photo={author.photo}
					postCreated={createdAt}
				/>

				<div className="w-full">
					<h2 className="pt-2 pl-2 text-[1.1rem] font-semibold">{convertToTitleCase(title)}</h2>
					<p className="px-2 text-[1.1rem] ">{content}</p>
				</div>

				<div className="w-full text-sm text-slate-500 text-end py-1">
					<span>{24} Likes</span> • <span>{25} Comments</span>
				</div>
			</div>
			<div className="flex  w-full border-t-[1px] border-gray-200 pt-1">
				<Reaction
					text="Like"
					icon={<BiLike />}
				/>
				<Reaction
					text="Comment"
					icon={<MdOutlineModeComment />}
				/>
			</div>
			<AddComment />
			<Comments />
		</div>
	);
};

type ReactionProps = {
	icon?: JSX.Element;
	text: string;
	onClick?: () => void;
	className?: string;
};

const Reaction = (props: ReactionProps) => {
	const { icon, text, onClick, className } = props;
	return (
		<button
			onClick={onClick}
			className={`${className} flex flex-grow justify-center items-center gap-2 text-lg
			 text-gray-700 text-[16px] hover:bg-gray-400/20 rounded-md py-1`}>
			{icon}
			<span>{text}</span>
		</button>
	);
};

const PostHead = (props: PostHeadProps) => {
	const { firstname, lastname, photo, postCreated } = props;
	return (
		<div className="w-full flex gap-2 items-center pt-2 px-2">
			{/* <Image
				src={photo}
				alt={firstname}
			/> */}
			<div className="h-9 w-9 rounded-full bg-gray-500"></div>
			<div className="flex flex-col -space-y-[2px]">
				<Link
					href={"/"}
					className="block hover:underline font-semibold text-gray-900 text-bold ">
					{firstname + " " + lastname}
				</Link>
				<div className="text-xs text-gray-600">{formatDate(postCreated)}</div>
			</div>
		</div>
	);
};

const AddComment = () => {
	const commentRef = useRef<HTMLDivElement>(null);

	const addComment = () => {
		if (commentRef) {
			const comment = commentRef?.current?.innerText;
			// Send to the server
			console.log(comment);

			//clear the innerText
		}
	};

	return (
		<div className="bg-slate-200 w-full p-2 flex gap-2 items-center">
			<div className="h-8 w-8 rounded-full bg-gray-600"></div>
			<div
				contentEditable={true}
				ref={commentRef}
				className="bg-white text-[15px] flex-grow text-slate-800 overflow-hidden p-2 outline-none rounded-md"
			/>

			<button
				onClick={addComment}
				className="text-[13px] p-2 rounded-full bg-blue-600 h-10 text-white flex-shrink-0">
				Add Comment
			</button>
		</div>
	);
};

const Comments = () => {
	return <div className="text-center">No comments here.</div>;
};
