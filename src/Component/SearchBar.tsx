import {useState} from 'react'

interface SearchBarProps {
    onSearch: (query: string) => void
}
export function SearchBar() {
  const [query, setQuery] = useState('')

    return (

        <div className="search-bar">
            <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchBar