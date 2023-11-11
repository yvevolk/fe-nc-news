import './CommentAdder.css'
import { postComment } from './utils/api';
import { useState } from 'react';
const exampleUsername = 'grumpy19';

const CommentAdder = ({article_id}) => {
   const handleSubmit = (e) => {
        postComment({
           "body": e.target[0].value,
           "author": exampleUsername,
           }, article_id)
           .then((res) => {
            setConfirmation(<p>Comment posted succesfully!</p>)
           })
           .catch((err) => {
            console.log(err)
            setConfirmation(<p>Error: invalid username</p>)
           })
        e.preventDefault();
    }

    const [confirmation, setConfirmation] = useState(<></>)

const handleReset = () => {
      setConfirmation(<></>)
    }

      return(
        <>
        <h3>Add your comment:</h3>
        <form onSubmit = {handleSubmit}>
          <p><span>Logged in as:</span> {exampleUsername}</p>
          <p><label htmlFor = 'comment-text' required>Comment:</label><br/><textarea id = 'comment-text' name = 'comment-text' placeholder = 'Type your comment here' required></textarea></p> 
          <button className = 'comment-button' id = 'submit'>Submit</button>
          <button className = 'comment-button' type="reset" onClick = {handleReset}>Reset</button>
          {confirmation}
        </form>
        </>
    )
}

export default CommentAdder;