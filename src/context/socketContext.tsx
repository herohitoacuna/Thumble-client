"use client";
import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

type Notification = {
	_id: string;
	userId: string;
	linkTo: string;
	title: string;
	type: string;
	createdAt: string;
	status: boolean;
};

enum SocketEvents {
	NewPost = "new-post",
	NewComment = "new-comment",
	NewLike = "new-like",
	NewFollowing = "new-following",
}

const socket = io();

export const SocketContext = createContext<Notification[]>([]);

export function SoocketProvider() {
	const [notifications, setNotifications] = useState<Notification[]>([]);

	useEffect(() => {
		socket.connect();

		socket.on(SocketEvents.NewPost, (data) => setNotifications(data));
		socket.on(SocketEvents.NewFollowing, (data) => setNotifications(data));
		socket.on(SocketEvents.NewLike, (data) => setNotifications(data));
		socket.on(SocketEvents.NewComment, (data) => setNotifications(data));

		return () => {
			socket.disconnect();
			socket.off(SocketEvents.NewPost);
			socket.off(SocketEvents.NewFollowing);
			socket.off(SocketEvents.NewLike);
			socket.off(SocketEvents.NewComment);
		};
	}, []);

	return <SocketContext.Provider value={notifications}> </SocketContext.Provider>;
}
