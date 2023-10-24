import './ArticleList.css';
import ArticleCard from './ArticleCard.jsx'
import {useState, useEffect} from 'react';
import {getArticles} from './utils/api.js';
import {format} from 'date-fns'
import Loader from './Loader.jsx'

const ArticleList = () => {
const [isLoading, setIsLoading] = useState(true)
const [articles, setArticles] = useState([])

useEffect(() => {
    setIsLoading(true)
    getArticles()
    .then((articles) => {
        setArticles(articles)
        setIsLoading(false)
    })
}, [])

if(isLoading) return <Loader/>

return (
    <section className = 'article-list'>
        <h2 className = 'article-header'>Articles</h2>
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