import type {Article} from '../types/article'

interface ArticleCardProps {
    article: Article
    size?: 'small' | 'large'
}

export function ArticleCard({article, size = 'small'}: ArticleCardProps) {
    return (
        <a 
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`article-card ${size}`}
        >
            <img src={article.thumbnailUrl} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>{article.category}</p>
        </a>
    )
} 

export default ArticleCard