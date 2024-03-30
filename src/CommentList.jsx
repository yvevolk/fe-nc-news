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
const [defaultComments, setDefaultComments] = useState([])

useEffect(() => {
    setIsLoading(true)
    getComments(article_id)
    .then((comments) => { 
        setDefaultComments(comments)
        setComments(comments)
        setIsLoading(false)
    })
}, [article_id])

const handleSortChange = (e) => {
    if(e.target.value === 'sort_by=votes'){
    setComments((comments) => [...comments].sort((a, b) => b.votes - a.votes))}
    else {setComments(defaultComments)}
}


if (isLoading) return <Loader/>

return (
    <>

<div id = 'sort-by-filter'>
        <label htmlFor="sort-by">Sort comments by: </label>
            <select name="sort-by" id='sort-by' onChange = {handleSortChange}>
            <option value="sort_by=date">Newest (default)</option>
            <option value="sort_by=votes" >Most upvoted</option>
            </select>
        </div>


    {comments.map((comment) => {
        return(
            <ul className = 'comment-list' key = {comment.comment_id}>
                <li>
                    <CommentCard
                    comment_id = {comment.comment_id}
                    author=  {comment.author}
                    body= {comment.body}
                    time= {format(new Date(`${comment.created_at}`), 'EEE d MMM yyyy HH:mm a')}
                    votes= {comment.votes}
                    />
                </li>
            </ul>
        )
    })}
    </>
)

}

export default CommentList;