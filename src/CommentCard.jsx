import './CommentCard.css'
import { deleteComment } from './utils/api';
const exampleUsername = 'grumpy19';

const CommentCard = ({author, time, body, votes, comment_id}) => {

const deleteHandler = (e) => {
    e.preventDefault();
    deleteComment(comment_id)
        .then((res) => {
            alert('Comment deleted!')
        })
        .catch((err) => {
            alert('Something went wrong!')
        })
}

    return(
        <div className = 'single-comment'>
            <div className = 'details'>
            <p key = 'author' className ='author'>{author} said:</p>
            <p key = 'time' className = 'time'>At {time}</p>
            </div>
            <p key = 'body' className = 'body'>{body}</p>
            <div className = 'comment-buttons'>
            <button key = 'votes' className = 'votes' aria-label='votes'>{votes} 👍</button>
            {author === exampleUsername && (
                <button key = 'delete' className = 'delete' aria-label='delete' onClick = {deleteHandler}> 🗑️</button>  
                                         )}
     
        </div></div>
    )
}

export default CommentCard;