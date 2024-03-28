import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSingleArticle } from "./utils/api";
import { format } from 'date-fns'
import Loader from './Loader.jsx'
import CommentList from "./CommentList";
import VoteCount from './VoteCount.jsx'
import CommentAdder from './CommentAdder.jsx'
import './SingleArticle.css'
import DummyText from './DummyText.jsx'

const SingleArticle = () => {
const {article_id} = useParams();
const [formattedDate, setFormattedDate] = useState('')
const [isLoading, setIsLoading] = useState(true)
const [article, setSingleArticle] = useState({})
const [commentSection, showCommentSection] = useState(<></>)
const [showButtonText, changeShowButtonText] = useState('Show comments')

const showComments = () => {
    if (showButtonText === 'Show comments'){
    showCommentSection(
        <div className = 'comments-section'>
        <h2>Comments: {article.comment_count}</h2>
        <CommentList/>
        </div>)
changeShowButtonText('Hide comments')}
else {showCommentSection(<></>); changeShowButtonText('Show comments')}
}

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
        <p className = 'body-text'>{article.body}</p>
        <DummyText/></div>

        </article>  <a className = 'big-button' href = '/'>Back</a>
        <VoteCount votes = {article.votes} article_id = {article_id}/>
        <section id = 'comments'>
        <div id = 'comment-adder'>
        <CommentAdder comment = '' article_id = {article_id}/>
        </div></section>
        <div id = 'show-button-container'><button id = 'show-button' onClick ={showComments}>{showButtonText}</button></div>
        {commentSection}
        </>
    )
}

export default SingleArticle;