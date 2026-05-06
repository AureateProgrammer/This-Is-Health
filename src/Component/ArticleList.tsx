import {useState} from 'react'
import article from '../types/article'

export function ArticleList() {
    const [articles, setArticles] = useState<article[]>([]) 


    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map((article: article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleList