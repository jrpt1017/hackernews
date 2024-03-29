import axios from 'axios';

export const getNewsByID = async (newsID: number) => {
  try {
    const news = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsID}.json?print=pretty`);
    return news.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const getNews = async () => {
  try {
    const news = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const newsArray = await Promise.all(news.data.slice(0, 15).map(async (newsId: number) => {
      return await getNewsByID(newsId);
    }));
    console.log('newsArray', newsArray)
    return newsArray;
  } catch (error) {
    console.log(error.message)
    return error.message;
  }
};