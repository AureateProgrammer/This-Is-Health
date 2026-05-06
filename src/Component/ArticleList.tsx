import {useState} from 'react'
import type Article from '../types/article'
import {ArticleCard} from './ArticleCard'
export const fakeArticles: Article[] = [
    {
        id: 1,
        title: 'How to Stay Productive While Working from Home',
        content: 'Working from home can be challenging, but with the right strategies, you can stay productive and maintain a healthy work-life balance. Here are some tips to help you succeed.',
        author: 'Jane',
        category: 'Productivity',
        thumbnailUrl: 'https://via.placeholder.com/150',
        datePublished: '2024-01-01'
    },
    {
        id: 2,
        title: '10 Healthy Habits for a Better Life',
        content: 'Incorporating healthy habits into your daily routine can significantly improve your overall well-being. Here are ten habits that can help you lead a better life.',
        author: 'John',
        category: 'Health',
        thumbnailUrl: 'https://via.placeholder.com/150',
        datePublished: '2024-02-01'
    },
    {
        id: 3,
        title: 'The Ultimate Guide to Personal Finance',
        content: 'Managing your finances effectively is crucial for achieving financial freedom. This guide covers everything you need to know about budgeting, saving, and investing.',
        author: 'Alice',
        category: 'Finance',
        thumbnailUrl: 'https://via.placeholder.com/150',
        datePublished: '2024-03-01'
    },
]

export const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>(fakeArticles)
    return (
        <div className="article-list">
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticleList