import './VoteCount.css'
import {useState} from 'react'
import { updateVotes } from './utils/api'

const VoteCount = ({votes, article_id}) => {
const [voteDifference, setVoteDifference] = useState(0)

const addVote = (value) => {
    setVoteDifference((currentVotes) => {
        return currentVotes + value
    })
    updateVotes(value, article_id)
}

    return(
        <section id = 'votes'>
        <p className="vote-instructions">What do you think of this article? Add your vote:</p>
        <div id = 'vote-container'>
        <button className = 'vote-button' id = 'vote-button-up' aria-label='vote up' disabled = {voteDifference === 1} onClick={() => {
            addVote(1)
        }}>👍</button>
        <div className = 'vote-counter-container'>
        <p className = 'vote-counter'>{votes + voteDifference}</p></div>
        <button className = 'vote-button' id = 'vote-button-down' aria-label='vote down' 
        disabled = {voteDifference === -1} onClick={() => {
            addVote(-1)
        }}>👎</button>
        </div>
    </section>
    )
}

export default VoteCount;