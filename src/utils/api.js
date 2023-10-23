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

export const getSingleArticle = (id) => {
    return newsApi.get('/articles/:id').then((res) => {
        return res.data.article;
    })
}