import { createClient, groq } from 'next-sanity';
import { Project } from "@/types";
import  clientConfig  from './config/client-config';

export async function getProjects(): Promise<Project[]> {


return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset -> url,
        url,
        alt,
        content
    }`
 );

}

export async function getProject(slug: string): Promise <Project> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset -> url,
            url,
            alt,
            content
        }`,
        {slug}
     )
}