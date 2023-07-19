import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class NewStore {
  newsCount = 9;

  newsList = [];
  constructor() {
    makeAutoObservable(this);
  }
  setNewsList(newsList) {
    this.newsList = newsList;
  }

  loadNews() {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
      })
      .then((res) => {
        return new Promise((resolve) =>
          setTimeout(() => {
            this.setNewsList(res.data.splice(0, this.newsCount));
            resolve();
          }, 1000),
        );
      })
      .catch(console.log);
  }

  deleteNews(id) {
    this.newsList = this.newsList.filter((item) => item.id !== id);
  }
}

export default NewStore;
