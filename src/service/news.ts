import { baseUrl } from "@/configs/http";
import { NewsModel } from "@/model/news";

class NewsService {
  public async listHighlightNews(amount: number = 4): Promise<NewsModel[]> {
    return fetch(`${baseUrl}/noticias/recentes-home/${amount}`, {
      method: "GET",
    }).then((response) => {
      return response.json();
    });
  }

  public async listLatestNews(amount: number = 8): Promise<NewsModel[]> {
    return fetch(`${baseUrl}/noticias/recentes-home/${amount}`, {
      method: "GET",
    }).then((response) => {
      return response.json();
    });
  }
}

export default new NewsService();
