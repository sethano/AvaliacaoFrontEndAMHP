"use client";

import { useEffect, useState } from "react";
import newsService from "@/service/news";
import { NewsModel } from "@/model/news";
import moment from "moment";
import { CircleNotch } from "@phosphor-icons/react";
import { TitlePage } from "@/components/title-page";
import "moment/locale/pt-br";

moment.locale("pt-br");

export default function News() {
  const [news, setNews] = useState<NewsModel[]>([]);
  const [newsLoading, setNewsLoading] = useState(false);

  useEffect(() => {
    setNewsLoading(true);
    newsService.listLatestNews().then((response) => {
      setNews(response);
      setNewsLoading(false);
    });
  }, []);

  return (
    <div>
      <TitlePage title="Notícias" />

      {newsLoading ? (
        <div className="flex gap-2 items-center justify-center p-5">
          <CircleNotch size={28} className="text-amhp-gray-300 animate-spin" />
          <p className="text-amhp-gray-300">Carregando notícias</p>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 p-5 pb-9 lg:gap-9">
          {news.map((newsItem) => {
            return (
              <div
                key={newsItem.id}
                className="w-72 h-80 relative rounded-lg self-stretch flex flex-col justify-between lg:w-56 overflow-hidden shadow-lg ease-out duration-300 hover:shadow-xl cursor-default"
              >
                <div className="h-full flex flex-col justify-between hover:bg-none hover:bg-amhp-dark-300/50 bg-gradient-to-tr from-amhp-green from-0% to-amhp-dark-100/60 to-90% z-20">
                  <p className="text-amhp-gray-100 text-sm text-end pr-2 pt-2">
                    {moment(
                      newsItem.dataCriacao,
                      "YYYY-MM-DDTHH:mm:ss"
                    ).calendar()}
                  </p>

                  <p className="p-2 z-20 text-amhp-gray-100">
                    {newsItem.titulo}
                  </p>
                </div>

                <img
                  src={"data:image/jpeg;base64," + newsItem.imagem || ""}
                  className="w-full h-full object-cover absolute top-0 left-0 rounded-lg z-10"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
