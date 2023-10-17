import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Filter } from "@/components/Filter";
import { Trends } from "@/components/Trends";
import { Following } from "@/components/Following";
import { Suspense } from "react";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Thumble Blogs",
	description: "Created by Herohito Acuña",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={
					inter.className +
					" bg-gray-300 min-h-screen scroll-smooth overflow-y-scroll flex flex-col items-center"
				}>
				<header className="flex justify-center items-center bg-black sticky top-0 w-full h-[4.5rem]">
					<Navbar />
				</header>

				<main className="flex justify-center gap-5 w-[1020px]">
					<section className="sticky top-[6rem] mt-6 h-positionSticky">
						<Filter />
					</section>
					<Suspense fallback={<p className="mt-20">Loadin....</p>}>{children}</Suspense>
					<section className="sticky top-[6rem] mt-6 h-positionSticky flex flex-col gap-4 w-[250px]">
						<Trends />
						<Following />
					</section>
				</main>
			</body>
		</html>
	);
}
