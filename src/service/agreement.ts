import { baseUrl } from "@/configs/http";

class AgreementService {
  public async listAgreements() {
    return fetch(baseUrl + "/convenios/ativos", { method: "GET" }).then(
      (response) => {
        return response.json();
      }
    );
  }
}

export default new AgreementService();
