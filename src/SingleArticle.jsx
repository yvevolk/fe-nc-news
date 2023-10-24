import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSingleArticle } from "./utils/api";
import { format, parseISO } from 'date-fns'
import './SingleArticle.css'

const SingleArticle = () => {
const {article_id} = useParams();
const [formattedDate, setFormattedDate] = useState('')
const [article, setSingleArticle] = useState({})
useEffect(() => {
    getSingleArticle(article_id)
    .then((article) => {
        setFormattedDate(format(new Date(`${article.created_at}`), 'EEE d MMM yyyy HH:mm a'))
        setSingleArticle(article)
    })
}, [article_id])

    return (
        <>
        <article>
        <h2>{article.title}</h2>
        <p className = 'single-topic'>{article.topic}</p>
        <p>By {article.author}</p>
        <p>Posted on: {formattedDate} </p>
        <div id = 'article-body'>
        <img id = 'main-image' src = {article.article_img_url}/>
        <p>{article.body}</p></div>
        </article>
        <section id = 'votes'>
            <label htmlFor="vote-button">Did you like this article? Give it a vote!</label>
            <button id = 'vote-button' aria-label='vote'>👍 {article.votes}</button>
        </section>
        <a id = 'back-button' href = '../articles'>Back</a>
        <section id = 'comments'>
            <h2>Comments: {article.comment_count}</h2>
            <p>Comments coming soon</p>
        </section>
        </>
    )
}

export default SingleArticle;