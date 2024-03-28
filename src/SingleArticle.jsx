import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSingleArticle } from "./utils/api";
import { format } from 'date-fns'
import Loader from './Loader.jsx'
import CommentList from "./CommentList";
import VoteCount from './VoteCount.jsx'
import CommentAdder from './CommentAdder.jsx'
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
        <CommentList/>
    )
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

if (isLoading)
    return <Loader/>
    return (
        <div className = "article-surround">
        <article>
        <h2>{article.title}</h2>
        <p className = 'single-topic'>{article.topic}</p>
        <p className = 'article-author'>By {article.author}</p>
        <p className = 'article-date'>Posted on: {formattedDate} </p>
        <img id = 'main-image' src = {article.article_img_url}/>
        <p className = 'blurb'>{article.body}</p>
        <hr class = 'rounded'/>
        <DummyText/>
        </article>

        <section className='votes-section'>
        <hr class = 'rounded'/>
        <VoteCount votes = {article.votes} article_id = {article_id}/>
        <hr class = 'rounded'/></section>

        <section className = 'comments-section'>
        <CommentAdder comment = '' article_id = {article_id}/>
        <div className = 'comments-number-and-button'>
        <h3 className = 'comments-count'>Comments: {article.comment_count}</h3>
        <button onClick ={showComments}>{showButtonText}</button>
        </div>
        {commentSection}
        

   
        
        </section>
        </div>
    )
}

export default SingleArticle;