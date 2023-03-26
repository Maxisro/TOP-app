import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Htag } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
	return (
		<>
			<div>
				<Htag tag={"h1"}>Lorem ipsum dolor sit amet consectetur</Htag>
				<Htag tag={"h2"}>Lorem ipsum dolor sit amet consectetur</Htag>
				<Htag tag={"h3"}>Lorem ipsum dolor sit amet consectetur</Htag>
			</div>
		</>
	);
}
