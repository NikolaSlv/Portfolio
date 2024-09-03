import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Social } from '@/typings';

const query = groq`
  *[_type == "social"] | order(_updatedAt desc)
`;

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request: Request) {
  const socials: Social[] = await sanityClient.fetch(query);
  return new Response( JSON.stringify({ socials }) );
}
