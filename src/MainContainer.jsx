import './MainContainer.css';
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import ArticleList from './ArticleList.jsx'
import SingleArticle from './SingleArticle.jsx'
import Header from './Header.jsx'

const MainContainer = () => {

const [filters, setFilters] = useState("")

return (
    <>
    <Header/>
    <main className = 'main-container'>
    <Routes>
        <Route path = '/' element = {<ArticleList/>}/>
        <Route path = '/articles' element = {<ArticleList filters = {filters}/>}/>
        <Route path = '/articles/:article_id' element = {<SingleArticle/>}/>
        </Routes>
    </main>
    </>
)
}

export default MainContainer;