import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSingleArticle } from "./utils/api";
import { format } from 'date-fns'
import Loader from './Loader.jsx'
import CommentList from "./CommentList";
import VoteCount from './VoteCount.jsx'
import './SingleArticle.css'

const SingleArticle = () => {
const {article_id} = useParams();
const [formattedDate, setFormattedDate] = useState('')
const [isLoading, setIsLoading] = useState(true)
const [article, setSingleArticle] = useState({})

useEffect(() => {
    setIsLoading(true)
    getSingleArticle(article_id)
    .then((article) => {
        setFormattedDate(format(new Date(`${article.created_at}`), 'EEE d MMM yyyy HH:mm a'))
        setSingleArticle(article)
        setIsLoading(false)
    })
}, [article_id])

if (isLoading) return <Loader/>

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
        <VoteCount votes = {article.votes} article_id = {article_id}/>
        <a id = 'back-button' href = '../articles'>Back</a>
        <section id = 'comments'>
         <h2>Comments: {article.comment_count}</h2> <CommentList/>
        </section>
        </>
    )
}

export default SingleArticle;