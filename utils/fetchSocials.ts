import { Social } from '@/typings';

let cachedSocials: Social[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 0.1 * 60 * 1000;

export const fetchSocials = async () => {
  const now = Date.now();
  
  // Check if the cached data is still valid
  if (cachedSocials && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedSocials;
  }

  // Fetch new data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`, {
    cache: 'no-store', // Ensure that the fetch request does not use cache
  });
  
  const data = await res.json();
  const socials: Social[] = data.socials;

  // Update cache
  cachedSocials = socials;
  cacheTimestamp = now;
  
  return socials;
}
