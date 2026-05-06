import Navbar from '../Component/Navbar'
import ArticleList from '../Component/ArticleList'
import SearchBar from '../Component/SearchBar'

export function Home() {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <ArticleList />
        </div>
    )
}

export default Home