import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";



export default async function Blog() {
  const projects = await getProjects();
  // console.log('Blog', projects)

  return(
    <div className="pt-36 pb-3">
       <h1 className='hero_title'>
           Blogs
            </h1>
            <h2 className='hero_subtitle '>Sharing and writing about my thoughts and tutorials on design, development and one-person business.</h2>
    <div className="mt-10 grid justify-items-center gap-10 md:grid-cols-3 md:justify-items-start md:gap-5 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-10">
      {projects.map((project) =>  (
        <Link href={`/projects/${project.slug}`} key={project._id}
        className="border-darkGray-100 border-2 rounded-lg p-2 hover:scale-90 hover:border-green-100 transition">
          {
            project.image && (
              <Image src={project.image} alt={project.alt} width={750} height={300}
              className="object-cover rounded-lg border border-darkGray-100"/>
            )          }
        <div className="text-white font-extrabold">{project.name}</div>
          </Link>
      ))}
      </div>
    </div>
  )
}