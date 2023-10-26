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

export const updateVotes = (value, article_id) => {
    return newsApi.patch(`/articles/${article_id}`,
        {"inc_votes": value}).then((res) => {
        return res.data.votes;
    })
}

export const postComment = (newComment, article_id) => {
    console.log(newComment)
    return newsApi.post(`/articles/${article_id}/comments`, newComment).then((res) => {
        return res.data.comment;
    })
}