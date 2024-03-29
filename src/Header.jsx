import { useState, useEffect } from 'react';
import { Link, Router, Routes } from 'react-router-dom';
import { getTopics } from './utils/api.js'

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
    <h1 id = 'site-title'>NC News</h1>
    <p id = 'site-tagline'>The latest and greatest news</p>
    </header>
    <nav>
        <ul id = 'navigation'>
                <button className='nav-button'>
                    <Link to = "/">Home</Link></button>
                    {topics.map((topic) => {
                    return (<button key = {topic.slug} value = {topic.slug} className = 'nav-button'><Link to = {`/articles?topic=${topic.slug}`}> {topic.slug} </Link></button>)
                })}
            </ul>
    </nav>
    </div>
)
}

export default Header;