import {useState} from 'react'

interface SearchBarProps {
    onSearch?: (query: string) => void
}
export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

    const handleChange = (value: string) => {
        setQuery(value)
        if (onSearch) {
            onSearch(value)
        }
    }

    return (

        <div className="search-bar">
            <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar