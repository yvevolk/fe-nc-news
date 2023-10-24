import './CommentCard.css'

const CommentCard = ({author, time, body, votes}) => {
    return(
        <div className = 'single-comment'>
            <div className = 'details'>
            <p key = 'author' className ='author'>{author} said:</p>
            <p key = 'time' className = 'time'>At {time}</p>
            </div>
            <p key = 'body' className = 'body'>{body}</p>
            <button key = 'votes' className = 'votes' aria-label='votes'>{votes} 👍</button>
            
        </div>
    )
}

export default CommentCard;