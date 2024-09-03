import { Skill } from '@/typings';

let cachedSkills: Skill[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 0.1 * 60 * 1000;

export const fetchSkills = async () => {
  const now = Date.now();
  
  // Check if the cached data is still valid
  if (cachedSkills && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedSkills;
  }

  // Fetch new data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, {
    cache: 'no-store', // Ensure that the fetch request does not use cache
  });
  
  const data = await res.json();
  const skills: Skill[] = data.skills;

  // Update cache
  cachedSkills = skills;
  cacheTimestamp = now;
  
  return skills;
}
