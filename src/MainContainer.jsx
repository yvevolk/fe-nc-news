import './MainContainer.css';
import {Route, Routes} from 'react-router-dom'
import ArticleList from './ArticleList.jsx'
import SingleArticle from './SingleArticle.jsx'

const MainContainer = () => {
return (
    <main className = 'main-container'>
    <Routes>
        <Route path = '/' element = {<ArticleList/>}/>
        <Route path = '/articles' element = {<ArticleList/>}/>
        <Route path = '/articles/:article_id' element = {<SingleArticle/>}/>
        </Routes>
    </main>
)
}

export default MainContainer;