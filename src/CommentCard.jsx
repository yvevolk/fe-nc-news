import { updateCommentVotes, deleteComment } from './utils/api';
import { useContext, useState } from 'react';
import { LoggedInUserContext } from './contexts/LoggedInUser.jsx';

const CommentCard = ({author, time, body, votes, comment_id}) => {

const {loggedInUser} = useContext(LoggedInUserContext)

const [voteDifference, setVoteDifference] = useState(0)

const addVote = (value) => {
    setVoteDifference((currentVotes) => {
        return currentVotes + value
    })
    updateCommentVotes(value, comment_id)
}


const deleteHandler = (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this comment?')){
    deleteComment(comment_id)
        .then((res) => {
            alert('Comment deleted!')
        })
        .catch((err) => {
            alert('Something went wrong!')
        })
    }
}

    return(
        <>
            <div className = 'comment-details'>
            <p key = 'author' className ='comment-author'>{author} said:</p>
            <p key = 'time' className = 'comment-date'>{time}</p>
            </div>
            <p key = 'body' className = 'comment-body'>{body}</p>
      
        <div className = 'comment-button-container'>
        <div className = 'comment-button-vote-container'>
        <button className = 'comment-vote-delete-button'  aria-label='vote up' disabled = {voteDifference === 1} onClick={() => {
            addVote(1)
        }}>👍</button>
        <p className = 'vote-counter'>{votes + voteDifference}</p>
        <button className = 'comment-vote-delete-button' aria-label='vote down' 
        disabled = {voteDifference === -1} onClick={() => {
            addVote(-1)
        }}>👎</button></div>
            {author === loggedInUser && (
                <button id = 'delete-button' key = 'delete-button' className = 'comment-vote-delete-button' aria-label='delete' onClick = {deleteHandler}> 🗑️</button>)}
            {author !== loggedInUser && (
                <div className = 'comment-vote-delete-button'></div>)}
        </div>

        </>
    )
}

export default CommentCard;