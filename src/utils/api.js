import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://nc-news-0dd5.onrender.com/api/'
});

export const getTopics = () => {
    return newsApi.get('/topics').then((res) => {
        return res.data.topics;
    })
}

export const getArticles = () => {
    return newsApi.get('/articles').then((res) => {
        return res.data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article[0];
    })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data.comments;
    })
}