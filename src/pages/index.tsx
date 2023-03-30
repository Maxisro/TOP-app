import React, { useState } from "react";
import { Htag, Button, Ptag, Tag, Rating } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { promises as fs } from "fs";
import path from "path";

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag={"h1"}>"counter"</Htag>
			<Button appearance="primary">Button</Button>
			<br />
			<Button appearance="ghost" arrow="down">
				Button
			</Button>
			<Ptag size={"l"}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vitae
				consequatur obcaecati similique atque neque molestias repellendus,
			</Ptag>
			<Tag size={"s"} color={"ghost"}>
				Small ghost
			</Tag>
			<Tag size={"s"} color={"gray"}>
				Small gray
			</Tag>
			<Tag size={"s"} color={"red"}>
				Small red
			</Tag>
			<Rating rating={rating} />
			<Rating rating={rating} isEditable={true} setRating={setRating} />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLICK_DOMAIN + "/api/top-page/find",
		{ firstCategory }
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
// 	const firstCategory = 0;

// 	const filePath = path.join(process.cwd(), "src", "DB", "menuDB.json");
// 	const fileContents = await fs.readFile(filePath, "utf8");
// 	const menu: MenuItem[] = JSON.parse(fileContents);
// 	return {
// 		props: {
// 			menu,
// 			firstCategory,
// 		},
// 	};
// };

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
