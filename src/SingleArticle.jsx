import { useState, useEffect } from "react";
import { getSingleArticle } from "./utils/api";

const ArticleList = () => {

const [article, setSingleArticle] = useState({})
useEffect(() => {
    getSingleArticle()
    .then((article) => {
        setArticles(article)
    })
})

    return (
        <>
        <h2>Single article title</h2>
        <p>Single article text</p>
        </>
    )
}

export default ArticleList;