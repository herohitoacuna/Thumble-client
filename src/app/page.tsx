import { getFilteredPost } from "@/apis/post";
import { CreatePost } from "@/components/CreatePost";
import { InfiniteScrollFeed } from "@/components/InfiniteScrollFeed";

type Props = {
	searchParams: {
		ct: string | undefined;
	};
};

export default async function Feed({ searchParams }: Props) {
	const category = searchParams.ct;

	const filteredPost = await getFilteredPost(category);

	return (
		<section className="flex-grow justify-center mt-6">
			<CreatePost />
			<InfiniteScrollFeed category={category} />
		</section>
	);
}
