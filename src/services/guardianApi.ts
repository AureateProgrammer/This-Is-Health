import type { Article } from '../types/article'

const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY
const BASE_URL = 'https://content.guardianapis.com'

export const fetchArticles = async (query: string = 'mental health'): Promise<Article[]> => {
  const response = await fetch(
    `${BASE_URL}/search?q=${query}&api-key=${API_KEY}&show-fields=thumbnail,trailText,byline`
  )

  const data = await response.json()

  return data.response.results.map((item: any) => ({
    id: item.id,
    title: item.webTitle,
    content: item.fields?.trailText || '',
    author: item.fields?.byline || 'The Guardian',
    category: item.sectionName,
    thumbnailUrl: item.fields?.thumbnail || '',
    datePublished: item.webPublicationDate,
    url: item.webUrl
  }))
}