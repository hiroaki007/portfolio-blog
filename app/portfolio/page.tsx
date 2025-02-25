"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    github: string;
    tags: string[];
}


export default function Portfolio() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error(err));
    }, []);



    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-6">ポートフォリオ</h1>
            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        <Image 
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="rounded-md"
                        />

                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div>
                            {project.tags.map((tag) => (
                                <span key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div>
                            <Link href={`/portfoilo/${project.id}`}>
                                詳細を見る
                            </Link>
                            <Link href={project.url}>
                                デモを見る
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}