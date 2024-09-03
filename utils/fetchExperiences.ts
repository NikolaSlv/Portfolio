import { Experience } from '@/typings';

let cachedExperiences: Experience[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 0.1 * 60 * 1000;

export const fetchExperiences = async () => {
  const now = Date.now();
  
  // Check if the cached data is still valid
  if (cachedExperiences && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedExperiences;
  }

  // Fetch new data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, {
    cache: 'no-store', // Ensure that the fetch request does not use cache
  });
  
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // Update cache
  cachedExperiences = experiences;
  cacheTimestamp = now;

  return experiences;
}
