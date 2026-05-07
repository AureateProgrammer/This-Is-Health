import Navbar from '../Component/Navbar'
import ArticleList from '../Component/ArticleList'
import SearchBar from '../Component/SearchBar'
import { Hero } from '../Component/Hero'
import {ChatRoom} from '../Component/LiveChat'
import { ArticleCard } from '../Component/ArticleCard'
import { useState } from 'react'
export function Home() {
    const [query, setQuery] = useState<string>('')
    return (
        <div>
            <Navbar />
            <Hero />
            <ArticleList />
        </div>
    )
}

export default Home