import {Link} from "react-router-dom";
import PageNav from "../components/PageNav.jsx";


function HomePage() {
    return (
        <div>
            <PageNav/>
            <h1>HomePage</h1>
            <Link to='/pricing'>Pricing</Link>
        </div>
    );
}

export default HomePage;