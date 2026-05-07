import { useState } from 'react'
import type { Article } from '../types/article'
import { ArticleCard } from './ArticleCard'

interface ArticleListProps {
  query: string
}

export const fakeArticles: Article[] = [
  {
    id: 1,
    title: 'How to Stay Productive While Working from Home',
    content: 'Working from home can be challenging, but with the right strategies, you can stay productive and maintain a healthy work-life balance. Here are some tips to help you succeed.',
    author: 'Jane',
    category: 'Productivity',
    thumbnailUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600',
    datePublished: '2024-01-01',
    url: '#'
  },
  {
    id: 2,
    title: '10 Healthy Habits for a Better Life',
    content: 'Incorporating healthy habits into your daily routine can significantly improve your overall well-being. Here are ten habits that can help you lead a better life.',
    author: 'John',
    category: 'Health',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
    datePublished: '2024-02-01',
    url: '#'
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Mental Wellness',
    content: 'Managing your mental health effectively is crucial for achieving overall well-being. This guide covers everything you need to know about mindfulness, self-care, and mental resilience.',
    author: 'Alice',
    category: 'Wellness',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600',
    datePublished: '2024-03-01',
    url: '#'
  },
]

export const ArticleList = ({ query }: ArticleListProps) => {
  const [articles, setArticles] = useState<Article[]>(fakeArticles)

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.content.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="article-list">
      {filteredArticles.map((article, index) => (
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