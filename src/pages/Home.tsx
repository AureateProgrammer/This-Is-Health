import Navbar from '../Component/Navbar'
import ArticleList from '../Component/ArticleList'
import SearchBar from '../Component/SearchBar'
import { Hero } from '../Component/Hero'

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <SearchBar />
            <ArticleList />
        </div>
    )
}

export default Home