"use client"

import React, { useEffect, useState } from "react";
import { getManifestUrl } from "@/app/utils/getManifestUrl";
import { getImageUrl } from "@/app/utils/getImageUrl";
import { ProjectCard } from "./ProjectCard";

interface ProjectResponseType {
	name: string;
	img_src: string;
	route: string;
	date: string;
	description: string;
	thumbnail: string;
};

export function Projects() {
	const [projects, setProjects] = useState<Array<ProjectResponseType> | undefined>(undefined);

	useEffect(() => {
		const loadProjects = (response: Array<ProjectResponseType>) => {
			const rows = response.map((item) => (
				{
					name: item.name,
					img_src: getImageUrl(`projects/${item.route}/${item.thumbnail}`),
					route: `/projects/${item.route}`,
					date: item.date,
					description: item.description,
					thumbnail: item.thumbnail,
				}
			));
			return rows;
		}

		const writeProjects = async () => {
			try {
				const res = await fetch(getManifestUrl("projects"))
					.then(res => res.json())
					.then(res => loadProjects(res));

				setProjects(res);
			}
			catch (error) {
				console.error("Adding data error:", error);
				setProjects([]);
			}
		}

		writeProjects();

	}, []);

	return (
		<>
			{
				projects?.map((item, index) => (
					<ProjectCard
						key={index}
						img_src={item.img_src}
						title={item.name}
						description={item.description}
						date={item.date}
						href={item.route}
					/>
				))
			}
		</>
	);
}

