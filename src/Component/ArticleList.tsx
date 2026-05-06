import useState from 'react'


export function ArticleList() {
  const [articles, setArticles] = useState([    ])


    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map((article: string) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleList