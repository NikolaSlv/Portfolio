import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Experience } from '@/typings';

const query = groq`
  *[_type == "experience"] | order(_updatedAt desc) {
    ...,
    technologies[]->
  }
`;

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request: Request) {
  const experiences: Experience[] = await sanityClient.fetch(query);
  return new Response( JSON.stringify({ experiences }) );
}
