import { useState, useEffect } from 'react'
import type { Article } from '../types/article'
import { ArticleCard } from './ArticleCard'
import { fetchArticles } from '../services/guardianApi'

interface ArticleListProps {
  query: string
}

export const ArticleList = ({ query }: ArticleListProps) => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true)
        const data = await fetchArticles(query || 'mental health')
        setArticles(data)
      } catch (err) {
        setError('Failed to fetch articles')
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [query]) 

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <ArticleCard
          key={article.id}
          article={article}
          size={index === 0 ? 'large' : 'small'}
        />
      ))}
    </div>
  )
}

export default ArticleList