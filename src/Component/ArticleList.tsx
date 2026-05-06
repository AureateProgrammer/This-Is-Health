import useState from 'react'


function ArticleList() {
  const [articles, setArticles] = useState([])


    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    )
}