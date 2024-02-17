import { baseUrl } from "@/configs/http";

class BannerService {
  public async listBanners() {
    return fetch(baseUrl + "/banners/publicados", { method: "GET" }).then(
      (response) => {
        return response.json();
      }
    );
  }
}

export default new BannerService();
