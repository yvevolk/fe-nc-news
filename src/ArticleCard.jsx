import './ArticleCard.css';
import {Route, Routes, Link} from 'react-router-dom'

const ArticleCard = ({id, title, topic, author, date, votes, comments, image}) => {

    return (
        <>
        <div className = 'article-card'>
            <h3 className = 'article-title' key = 'title'>{title}</h3>
            <div className = 'vote-count' aria-label='vote'><p className ='vote-box-content'>Votes: {votes}</p></div>
            <p className = 'article-author' key = 'author'>By {author}</p>
            <ul className = 'article-topic'><li className = 'single-topic' key = 'topic'>{topic}</li></ul>
            <p className = 'article-date' key = 'date'>Posted: {date}</p>
            <p className = 'article-comments' key = 'comments'>Comments: {comments}</p>
            <img className = 'article-image' src = {`${image}`}/>
            <div className = 'read-more'>
            <Link to = {`/articles/${id}`}><button className = 'read-button' name ='read more'>Read more</button></Link>
            </div>
            </div>
            </>
            
    )
    }
    
    export default ArticleCard;