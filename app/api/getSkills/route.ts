import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Skill } from '@/typings';

const query = groq`
  *[_type == "skill"] | order(_updatedAt desc)
`;

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request: Request) {
  const skills: Skill[] = await sanityClient.fetch(query);
  return new Response( JSON.stringify({ skills }) );
}
