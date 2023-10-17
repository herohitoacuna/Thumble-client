const BASE_URL = process.env.BASE_URL;
const ACCESS_TOKEN = localStorage.getItem("at");

const authorization = { "Authorization": "Bearer " + ACCESS_TOKEN };

export const getMyProfileDetails = async () => {
	const res = await fetch(`${BASE_URL}/profile`, {
		headers: authorization,
	});
	if (!res.ok) throw new Error("Failed to fetch profile");
	return res.json();
};

export const updateMyProfileDetails = async (e: FormData) => {
	const res = await fetch(`${BASE_URL}/profile`, {
		method: "PATCH",
		headers: authorization,
		body: JSON.stringify(e),
	});
	if (!res.ok) throw new Error("Failed to update profile");
	return res.json();
};

export const deleteMyProfileDetails = async () => {
	const res = await fetch(`${BASE_URL}/profile`, {
		method: "DELETE",
		headers: authorization,
	});
	if (!res.ok) throw new Error("Failed to delete profile");
	return res.json();
};

export const getMyPosts = async () => {};

export const createPost = async () => {};

export const updatePost = async () => {};

export const deletePost = async () => {};

export const getMyLikePosts = async () => {};

export const followUser = async () => {};

export const unfollowUser = async () => {};

export const getUserDetails = async () => {};

export const getPosts = async () => {};

export const getFollowers = async () => {};

export const getFollowing = async () => {};
