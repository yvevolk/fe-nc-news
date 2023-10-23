import './ArticleCard.css';

const ArticleCard = ({title, topic, author, date, votes, comments, image}) => {

    return (
        <div className = 'article-card'>
            <h3 className = 'article-title' key = 'title'>{title}</h3>
            <button className = 'vote-button' aria-label='vote'>👍 {votes}</button>
            <p className = 'article-author' key = 'author'>By {author}</p>
            <ul className = 'article-topic'><li className = 'single-topic' key = 'topic'>{topic}</li></ul>
            <p className = 'article-date' key = 'date'>Posted: {date}</p>
            <p className = 'article-comments' key = 'comments'>Comments: {comments}</p> <button className = 'read-button' name ='read more'>Read more</button>
            <img className = 'article-image' src = {`${image}`}/>
           
            </div>
    )
    }
    
    export default ArticleCard;