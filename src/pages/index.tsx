import React, { useEffect, useState } from "react";
import { Htag, Button, Ptag, Tag, Rating } from "@/components";
import { Layout, withLayout } from "@/layout/Layout";

function Home(): JSX.Element {
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
		</>
	);
}

export default withLayout(Home);
