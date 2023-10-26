import './Header.css';
import { useState, useEffect } from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {getTopics, getArticles} from './utils/api.js'


const Header = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics()
        .then((topics) => {
            setTopics(topics)
        })
    }, [])

return (
    <div id= 'fullheader'>
    <header>
    <h1>NC News</h1>
    <p className = 'tagline'>The latest and greatest news</p>
    </header>
    <nav>
        <ul className = 'navigation'>
                <button className='nav-button'><Link to = "/">Home</Link></button>
                {topics.map((topic) => {
                    return (<button key = {topic.slug} value = {topic.slug} className = 'nav-button'><Link to = {`/articles?topic=${topic.slug}`}> {topic.slug} </Link></button>)
                })}
            </ul>
    </nav>
    </div>
)
}

export default Header;