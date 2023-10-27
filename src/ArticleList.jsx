import './ArticleList.css';
import ArticleCard from './ArticleCard.jsx'
import {useState, useEffect} from 'react';
import {getArticles} from './utils/api.js';
import {format} from 'date-fns'
import Loader from './Loader.jsx'
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Route, Routes, Link} from 'react-router-dom';

const ArticleList = () => {
const [isLoading, setIsLoading] = useState(true)
const [articles, setArticles] = useState([])
const [defaultArticles, setDefaultArticles] = useState([])
const [searchParams] = useSearchParams()
const topic = (searchParams.get('topic'))
const navigate = useNavigate();

const handleSortChange = (e) => {
    console.log(e.target.value)
if(e.target.value === 'sort_by=votesASC'){
    getArticles(topic).then(() => {setArticles((articles) => [...articles].sort((a, b) => a.votes - b.votes))})
   }
   else if(e.target.value === 'sort_by=votesDESC'){
    setArticles((articles) => [...articles].sort((a, b) => b.votes - a.votes))}
    else if(e.target.value === 'sort_by=comment_countASC'){
    setArticles((articles) => [...articles].sort((a, b) => a.comment_count - b.comment_count))}
    else if(e.target.value === 'sort_by=comment_countDESC'){
    setArticles((articles) => [...articles].sort((a, b) => b.comment_count - a.comment_count))}
    else {setArticles(defaultArticles)}
}

useEffect(() => {
    setIsLoading(true)
    getArticles(topic)
    .then((articles) => {
        setArticles(articles)
        setDefaultArticles(articles)
        setIsLoading(false)
    })
}, [searchParams])

if(isLoading) return <Loader/>

return (
    <section className = 'article-list'>
        <h2 className = 'article-header'>{topic} Articles</h2>
        <div id = 'sort-by-filter'>
        <label htmlFor="sort-by">Sort articles by: </label>
            <select name="sort-by" id='sort-by' onChange = {handleSortChange}>
            <option value="sort_by=dateDESC">Newest (default)</option>
            <option value="sort_by=comment_countDESC">Most commented</option>
            <option value="sort_by=comment_countASC">Least commented</option>
            <option value="sort_by=votesDESC">Most upvoted</option>
            <option value="sort_by=votesASC">Most downvoted</option>
        </select>
        </div>
        {articles.map((article) => {
            return(
            <ul className = 'articles' key = {article.article_id}>
            <li><ArticleCard 
            id = {article.article_id}
            title = {article.title}
            author = {article.author}
            topic = {article.topic}
            date = {format(new Date(`${article.created_at}`), 'EEE d MMM yyyy HH:mm a')}
            votes = {article.votes}
            comments = {article.comment_count}
            image = {article.article_img_url}
            /></li>
            </ul>
            )
        })
        }
    </section>
)
}

export default ArticleList;