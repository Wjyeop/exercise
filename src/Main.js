import react from "react";
import StopWatch from './StopWatch';
import Yes from './Yes';
import { Link } from 'react-router-dom';

function Main(props) {
    return (
        <div>
            <main>
                <h1>안녕하세요</h1>
            </main>
            <div><StopWatch/></div>
            <div><Yes /></div>
            <div><SiteButton/></div>
        </div>
    );
}

function SiteButton() {
    return(
        <Link to='/Second'>
        <button>
            Second Page
        </button>
        </Link>
    );
}

export default Main;