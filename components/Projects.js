import Image from "next/image";
import { projectsInfo } from "@/lib/projectsInfo";

export default function Projects() {
    return (
        <section>
            <div className="my-10 text-left">
                <h1 className="text-4xl my-4">Projects</h1>
                <p>I've worked on a variety of projects both individually and in collaboration with developers and UX designers.</p>
            </div>

            <div className="flex justify-center flex-col gap-10 md:flex-row">
                {projectsInfo.map((project, id) => (
                    <div key={id} className="basis-1/3 text-center shadow-lg p-5 rounded-xl my-5">
                        <h2 className="text-xl my-2">{project.title}</h2>
                        <Image src={project.image} alt="" className="rounded-xl h-auto" />
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
