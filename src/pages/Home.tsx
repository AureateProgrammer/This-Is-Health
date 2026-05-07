import Navbar from '../Component/Navbar'
import ArticleList from '../Component/ArticleList'
import SearchBar from '../Component/SearchBar'
import { Hero } from '../Component/Hero'
import {LiveChatBox} from '../Component/LiveChat'
import { ArticleCard } from '../Component/ArticleCard'
export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ArticleList />
            <LiveChatBox />
        </div>
    )
}

export default Home