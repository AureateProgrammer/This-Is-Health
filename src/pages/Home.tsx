import Navbar from '../Component/Navbar'
import ArticleList from '../Component/ArticleList'
import SearchBar from '../Component/SearchBar'
import { Hero } from '../Component/Hero'
import {ChatRoom} from '../Component/LiveChat'
import { ArticleCard } from '../Component/ArticleCard'
export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ArticleList />
        </div>
    )
}

export default Home