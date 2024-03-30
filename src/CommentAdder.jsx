import { postComment } from './utils/api';
import { useContext } from 'react';
import { LoggedInUserContext } from './contexts/LoggedInUser.jsx';

const CommentAdder = ({article_id}) => {

const {loggedInUser} = useContext(LoggedInUserContext)

   const handleSubmit = (e) => {
        postComment({
           "body": e.target[0].value,
           "author": loggedInUser,
           }, article_id)
           .then((res) => {
            alert('Comment posted!')
           })
           .catch((err) => {
            alert('Something went wrong!')
           })
        e.preventDefault();
    }

      return(
        <>
        <h3>Add your comment:</h3>
        <form onSubmit = {handleSubmit}>
          <p>Logged in as: {loggedInUser}</p>
          <p><label htmlFor = 'comment-textentry' >Comment:</label>
          <textarea name = 'comment-textentry' id = 'comment-textentry' placeholder = 'What did you think?' required></textarea></p> 
          <button>Submit</button>
        </form>
        </>
    )
}

export default CommentAdder;