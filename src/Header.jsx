import './Header.css';
import { useState, useEffect } from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {getTopics} from './utils/api.js'


const Header = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics()
        .then((topics) => {
            setTopics(topics)
        })
    })
return (
    <div id = 'full-header'>
    <header>
    <h1>NC News</h1>
    <p className = 'tagline'>The latest and greatest news</p>
    </header>
    <nav>
        <ul className = 'navigation'>
                <li>Home</li>
                {topics.map((topic) => {
                    return (<li key = {topic.slug}>{topic.slug}</li>)
                })}
            </ul>
    </nav>
    </div>
)
}

export default Header;