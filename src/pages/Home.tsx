import Navbar from '../Component/Navbar'
import ArticleList from '../Component/ArticleList'
import SearchBar from '../Component/SearchBar'
import { Hero } from '../Component/Hero'
import { useState } from 'react'

export function Home() {
  const [query, setQuery] = useState<string>('')

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar onSearch={(q: string) => setQuery(q)} /> 
      <ArticleList query={query} />                   
    </div>
  )
}

export default Home