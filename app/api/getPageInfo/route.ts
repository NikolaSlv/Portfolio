import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { PageInfo } from '@/typings';

const query = groq`
  *[_type == "pageInfo"] | order(_updatedAt desc)[0]
`;

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request: Request) {
  const pageInfo: PageInfo[] = await sanityClient.fetch(query);
  return new Response( JSON.stringify({ pageInfo }) );
}
