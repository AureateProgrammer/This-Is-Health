

import mentalHealth from "../imgs/MentalHealth.png";

export function Navbar() {
    
    
    return (
        <nav>
            <img id="navlogo" src={mentalHealth} alt="Mental Health-Image-Guy-With-Leaves-Around" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    )
}


export default Navbar