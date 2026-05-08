import {useState} from 'react'

// Allow parent components to optionally receive live search text.
interface SearchBarProps {
    onSearch?: (query: string) => void
}

// Reusable search input used across the app (hero, nav, etc.).
export function SearchBar({ onSearch }: SearchBarProps) {
  // Keep local input state so the field stays controlled.
  const [query, setQuery] = useState('')

    // Update local text first, then notify the parent if a callback is provided.
    const handleChange = (value: string) => {
        setQuery(value)
        if (onSearch) {
            onSearch(value)
        }
    }

    return (

        // Shared styling hook for consistent look wherever the search is rendered.
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search articles..."
                value={query}
                // Fire on each keystroke to support live search behavior.
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar