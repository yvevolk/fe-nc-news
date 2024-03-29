import { deleteComment } from './utils/api';
import { useContext } from 'react';
import { LoggedInUserContext } from './contexts/LoggedInUser.jsx';

const CommentCard = ({author, time, body, votes, comment_id}) => {

const {loggedInUser} = useContext(LoggedInUserContext)

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
        <>
            <div className = 'comment-details'>
            <p key = 'author' className ='comment-author'>{author} said:</p>
            <p key = 'time' className = 'comment-date'>{time}</p>
            </div>
            <p key = 'body' className = 'comment-body'>{body}</p>
            <div className = 'comment-button-container'>
            <button key = 'votes' className = 'comment-button' aria-label='votes'>{votes} 👍</button>
            {author === loggedInUser && (
                <button key = 'delete' className = 'comment-button' aria-label='delete' onClick = {deleteHandler}> 🗑️</button>)}
            {author !== loggedInUser && (
                <div className = "empty-space"></div>)}
        </div>
        </>
    )
}

export default CommentCard;