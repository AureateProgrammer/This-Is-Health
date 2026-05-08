import SearchBar from "../Component/SearchBar"
interface HeroProps {
    onSearch?: (query: string) => void
}

export function Hero({ onSearch }: HeroProps) {

    return (
        <div className="hero">
            <h1>Welcome, <span id = 'h1hero'>Become the best version of yourself</span></h1>
            <p>Source for self-improvement articles and tips.</p> 
            <SearchBar onSearch={onSearch} />
            
        </div>
    )
}

export default Hero