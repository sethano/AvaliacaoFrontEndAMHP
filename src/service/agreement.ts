import { baseUrl } from "@/configs/http";
import { AgreementModel } from "@/model/agreement";

class AgreementService {
  public async listAgreements(): Promise<AgreementModel[]> {
    return fetch(baseUrl + "/convenios/ativos", { method: "GET" }).then(
      (response) => {
        return response.json();
      }
    );
  }
}

export default new AgreementService();
