import {useState} from 'react'

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