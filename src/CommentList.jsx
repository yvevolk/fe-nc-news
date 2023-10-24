import './CommentList.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getComments} from './utils/api.js'
import {format} from 'date-fns'
import CommentCard from './CommentCard'
import Loader from './Loader.jsx'

const CommentList = () => {
const {article_id} = useParams();
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    getComments(article_id)
    .then((comments) => {
        setComments(comments)
        setIsLoading(false)
    })
}, [article_id])

if (isLoading) return <Loader/>

return (
    <>
    {comments.map((comment) => {
        return(
            <ul className = 'comment-list' key = {comment.comment_id}>
                <li>
                    <CommentCard
                    author=  {comment.author}
                    body= {comment.body}
                    time= {format(new Date(`${comment.created_at}`), 'EEE d MMM yyyy HH:mm a')}
                    votes = {comment.votes}
                    />
                </li>
            </ul>
        )
    })}
    </>
)

}

export default CommentList;