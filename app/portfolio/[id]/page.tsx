"use client"

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    github: string;
    tags: string[];
}



export default function ProjectDetail() {
    const params = useParams(); 
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);


        useEffect(() => {

            if(!params.id) return;

            fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.find((p:Project) => p.id === params.id);
                if(!foundProject) {
                    router.push("/portfolio");
                } else {
                    setProject(foundProject);
                }
            
            })
            .catch((err) => {
                console.error( "データの取得に失敗しました。",err);
                router.push("/portfolio");
            })
            .finally(() => setLoading(false));
        }, [params.id]);
        
        if (loading) {
            return <p className="text-center text-gray-600">読み込み中...</p>;
          }
        
          if (!project) {
            return <p className="text-center text-red-500">プロジェクトが見つかりませんでした。</p>;
          }
        

    return (
        <section>
            <h1>{project.title}</h1>
            <div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-md"
                />
            </div>
            <div>
                <p>{project.description}</p>
                <div>
                    {project.tags.map((tag) => (
                        <span key={tag} >
                            {tag}
                        </span>
                    ))}
                </div>
                <div>
                    <Link href={project.github} target="_blank">
                        GitHub リポジトリ
                    </Link>
                </div>

                <div>
                    <Link href={project.url} target="_blank">
                        デモサイトを見る
                    </Link>
                </div>
            </div>
        </section>
    );


}
