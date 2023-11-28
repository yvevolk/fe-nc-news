import './CommentAdder.css'
import { postComment } from './utils/api';
const exampleUsername = 'grumpy19';

const CommentAdder = ({article_id}) => {
   const handleSubmit = (e) => {
        postComment({
           "body": e.target[0].value,
           "author": exampleUsername,
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
          <p><span>Logged in as:</span> {exampleUsername}</p>
          <p><label htmlFor = 'comment-text' required>Comment:</label><br/><textarea id = 'comment-text' name = 'comment-text' placeholder = 'Type your comment here' required></textarea></p> 
          <button className = 'comment-button' id = 'submit'>Submit</button>
        </form>
        </>
    )
}

export default CommentAdder;