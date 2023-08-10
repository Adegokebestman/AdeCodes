import { Hero } from '@/components'
import { getProjects } from '@/sanity/sanity-utils';
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="overflow-hidden">
    <Hero />
    <div className='mt-12 padding-x padding-y max-width'>
      <div className=' '>
        <h1 className='uppercase text-white font-bold text-lg'>latest drops</h1>
        <div className="mt-10 grid justify-items-center gap-10 md:grid-cols-3 md:justify-items-start md:gap-5 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">

      {projects.map((project) =>  (
        <Link href={`/projects/${project.slug}`} key={project._id}
        className=" rounded-lg p-2 hover:scale-90 hover:border-green-100 transition">
          {
            project.image && (
              <Image src={project.image} alt={project.alt} width={750} height={300}
              className="object-cover rounded-lg border border-darkGray-100"/>
            )          }
        <div className="text-white font-extrabold pt-4 pb-4 ">{project.name}</div>
        <span className='flex justify-between items-center'>
        <h4 className="w-24 rounded-lg text-white border-2 bg-customGray px-3 py-1 text-sm  font-extralight
                 border-darkGray-100 dark:bg-hoverBlack">Design</h4>
      <Image src='/up_arrow.svg' alt='go-to' width={24} height={24} />
</span>
          </Link>
      ))}
      </div>
        </div>

    </div>

    </main>
  )
}
