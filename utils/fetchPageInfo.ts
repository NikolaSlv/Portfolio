import { PageInfo } from '@/typings';

let cachedPageInfo: PageInfo | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 0.1 * 60 * 1000;

export const fetchPageInfo = async () => {
  const now = Date.now();
  
  // Check if the cached data is still valid
  if (cachedPageInfo && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedPageInfo;
  }

  // Fetch new data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, {
    cache: 'no-store', // Ensure that the fetch request does not use cache
  });
  
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  // Update cache
  cachedPageInfo = pageInfo;
  cacheTimestamp = now;
  
  return pageInfo;
}
