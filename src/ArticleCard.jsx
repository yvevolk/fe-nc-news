import {Route, Routes, Link} from 'react-router-dom'

const ArticleCard = ({id, title, topic, author, date, votes, comments, image}) => {

    return (
        <>
        <div className = 'article-card'>
            <h3 className = 'article-title' key = 'title'>{title}</h3>
            <ul className = 'article-topic'><li className = 'single-topic' key = 'topic'>{topic}</li></ul>
            <p className = 'article-author' key = 'author'>By {author}</p>
            <p className = 'article-date' key = 'date'>Posted: {date}</p>
            <img className = 'article-image' src = {`${image}`}/>
            <div className = 'vote-comment-count'>
            <p className ='vote-count' aria-label='votes'>👍 {votes}</p>
            <p className = 'comment-count' key = 'comments' aria-label='comments'>💬 {comments}</p>
            </div>
            <Link to = {`/articles/${id}`}><button className = 'read-button' name ='read more'>Read more</button></Link></div>
            </>
            
    )
    }
    
    export default ArticleCard;