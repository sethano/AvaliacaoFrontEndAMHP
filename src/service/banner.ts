import { baseUrl } from "@/configs/http";
import { BannerModel } from "@/model/banner";

class BannerService {
  public async listBanners(): Promise<BannerModel[]> {
    return fetch(baseUrl + "/banners/publicados", { method: "GET" }).then(
      (response) => {
        return response.json();
      }
    );
  }
}

export default new BannerService();
