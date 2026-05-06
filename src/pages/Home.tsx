import Navbar from '../Component/Navbar'
import ArticleList from '../Component/ArticleList'
import SearchBar from '../Component/SearchBar'
import { Hero } from '../Component/Hero'
import { ArticleCard } from '../Component/ArticleCard'

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