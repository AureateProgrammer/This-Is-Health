import type {Article} from '../types/article'

interface ArticleCardProps {
    article: Article
    size?: 'small' | 'large'
}

export function ArticleCard({article, size = 'small'}: ArticleCardProps) {
    return (
        <div className={`article-card ${size}`}>
            <img src={article.thumbnailUrl} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.author}</p>
        </div>
    )
}

