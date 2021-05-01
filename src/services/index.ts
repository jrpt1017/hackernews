import axios, { AxiosResponse } from 'axios';

export const getNews = async () => {
  try {
    const news = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    return news.data;
  } catch (error) {
    console.log(error.message)
    return error.message;
  }
};

export const getNewsByID = async (newsID: number) => {
  try {
    const news = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsID}.json?print=pretty`);
    return news.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};