import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Project } from '@/typings';

const query = groq`
  *[_type == "project"] | order(_updatedAt desc) {
    ...,
    technologies[]->
  }
`;

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request: Request) {
  const projects: Project[] = await sanityClient.fetch(query);
  return new Response( JSON.stringify({ projects }) );
}
