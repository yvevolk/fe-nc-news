import { postComment } from './utils/api';

const CommentAdder = ({article_id}) => {
   const handleSubmit = (e) => {
        postComment({
           "body": e.target[0].value,
           "author": 'grumpy19',
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
          <p><span>Logged in as:</span> grumpy19</p>
          <p><label htmlFor = 'comment-text' required>Comment:</label><br/>
          <textarea className = 'comment-text' name = 'comment-text' placeholder = 'What did you think?' required></textarea></p> 
          <button>Submit</button>
        </form>
        </>
    )
}

export default CommentAdder;