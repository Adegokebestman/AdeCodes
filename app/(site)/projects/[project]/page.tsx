import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
 params: {project: string};
}



export default async function Project({ params }: Props) {
    const slug = params.project;

    const project = await getProject(slug)

    return (
    <div className="pt-36 pb-">
        <div className="flex items-center justify-between">


        <h1 className=" font-extrabold text-3xl shadow  bg-gradient-to-r from-green-100 via-red-400 to bg-purple-400 bg-clip-text
        text-transparent">
         {project.name}
         </h1>
         <a href={project.url} title="view project" target="_blank" rel="noreferrer"
         className="border-2 border-darkGray-100 text-white font-bold py-3 px-4 whitespace-nowrap hover:bg-green-100
          hover:text-white transition "
          > View Project </a>
         </div>

        {/* Blog content */}
        <div className="text-white text-lg mt-5">
            <PortableText value={project.content}  />
        </div>

        {/* Image */}

        <Image src={project.image} alt={project.name} width={1920} height={1080}
        className="mt-10 border-2 border-darkGray-100 object-cover rounded-xl" />
         </div>

         )

}