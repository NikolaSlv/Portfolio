import { Project } from '@/typings';

let cachedProjects: Project[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 0.1 * 60 * 1000;

export const fetchProjects = async () => {
  const now = Date.now();
  
  // Check if the cached data is still valid
  if (cachedProjects && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedProjects;
  }

  // Fetch new data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, {
    cache: 'no-store', // Ensure that the fetch request does not use cache
  });
  
  const data = await res.json();
  const projects: Project[] = data.projects;

  // Update cache
  cachedProjects = projects;
  cacheTimestamp = now;
  
  return projects;
}
