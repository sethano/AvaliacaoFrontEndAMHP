"use client";

import { TitlePage } from "@/components/title-page";
import { AgreementModel } from "@/model/agreement";
import agreementService from "@/service/agreement";
import { useState, useEffect } from "react";

export default function Agreement() {
  const [agreements, setAgreement] = useState<AgreementModel[]>([]);

  const checkDiffFirstLetterLatestAgreement = (
    current: string | null,
    last: string | null
  ): boolean => {
    if (!current || !last) return false;

    const currentFirstLetter = current.charAt(0);
    const lastFirstLetter = last.charAt(0);

    if (currentFirstLetter !== lastFirstLetter) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    agreementService.listAgreements().then((response) => {
      setAgreement(response);
    });
  }, []);

  return (
    <div>
      <TitlePage title="Convênios" />

      <ol className="columns-1 list-decimal list-inside px-8 py-4 md:columns-2 lg:columns-3">
        {agreements.map((agreementItem, index) => {
          if (agreementItem.divulgarSite) {
            return (
              <div key={agreementItem.id}>
                {checkDiffFirstLetterLatestAgreement(
                  agreementItem.nomeDivulgacao,
                  agreements[index - 1]?.nomeDivulgacao || null
                ) ? (
                  <br />
                ) : (
                  ""
                )}

                <li>
                  {agreementItem.nomeDivulgacao}
                  {agreementItem.suspenso && <i> - suspenso</i>}
                </li>
              </div>
            );
          }
        })}
      </ol>
    </div>
  );
}
