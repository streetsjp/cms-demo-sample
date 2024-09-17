import qs from 'qs';

export async function fetchAPI<T>(path: string, urlParamsObject = {}, options = {}): Promise<T> {
  const mergedOptions = {
    next: { revalidate: 10 },
    headers: {
      'Content-Type': 'application/json',
      'X-Apnea-Team-Id': process.env.TEAM_ID || '',
      'X-Apnea-Api-Key': process.env.API_KEY || '',
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${process.env.NEXT_PUBLIC_API_URL}${path}${queryString.length > 0 ? `?${queryString}` : ''}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);
  const data = await response.json();
  return data;
}

export const ENDPOINT = {
  ARTICLES: '/api/v1/articles',
  ARTICLE: (articleId: string) => `/api/v1/articles/${articleId}`,
};