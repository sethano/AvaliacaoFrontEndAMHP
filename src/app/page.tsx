"use client";

import { BannerModel } from "@/model/banner";
import newsService from "@/service/news";
import bannerService from "@/service/banner";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getBreakpoint } from "@/hook/breakpoints";
import { NewsModel } from "@/model/news";
import Link from "next/link";
import { CircleNotch } from "@phosphor-icons/react";
import moment from "moment";
import "moment/locale/pt-br";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

moment.locale("pt-br");

export default function Home() {
  const [banners, setBanners] = useState<BannerModel[]>([]);
  const [news, setNews] = useState<NewsModel[]>([]);
  const [newsLoading, setNewsLoading] = useState(false);

  const breakpointMd = getBreakpoint("md");
  const [widthSize, setWidthSize] = useState<number | null>(
    (typeof window !== "undefined" && window.innerWidth) || null
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWidthSize(window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    bannerService.listBanners().then((response) => {
      setBanners(response);
    });

    setNewsLoading(true);
    newsService.listHighlightNews().then((response) => {
      setNews(response);
      setNewsLoading(false);
    });
  }, []);

  return (
    <div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
          }}
        >
          {banners.map((bannerItem) => {
            return (
              <SwiperSlide key={bannerItem.id}>
                <img
                  src={
                    (widthSize && widthSize < breakpointMd
                      ? bannerItem.urlImagemMobile
                      : bannerItem.urlImagemDesktop) || ""
                  }
                  className="mx-auto"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div>
        <div className="flex justify-between items-center px-5 pt-9">
          <h3 className="text-amhp-gray-300 md:text-2xl text-xl">
            Últimas notícias
          </h3>

          <Link
            href="/news"
            className="w-28 bg-amhp-green hover:bg-amhp-green/80 shadow-lg text-center rounded text-amhp-gray-100"
          >
            saiba mais
          </Link>
        </div>

        {newsLoading ? (
          <div className="flex gap-2 items-center justify-center p-5">
            <CircleNotch
              size={28}
              className="text-amhp-gray-300 animate-spin"
            />
            <p className="text-amhp-gray-300">Carregando notícias</p>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-center items-center gap-12 p-5 pb-9 lg:gap-9">
            {news.map((newsItem) => {
              return (
                <div
                  key={newsItem.id}
                  className="w-72 rounded-lg self-stretch flex flex-col justify-between lg:w-56 overflow-hidden shadow-lg ease-out duration-300 hover:shadow-xl cursor-default"
                >
                  <img
                    src={"data:image/jpeg;base64," + newsItem.imagem || ""}
                    className="rounded-t-lg grow max-h-40 ease-out duration-300 hover:scale-110"
                  />

                  <p className="p-2 bg-white z-10">{newsItem.titulo}</p>
                  <p className="text-amhp-gray-300 text-sm text-end pr-2 pb-2">
                    {moment(
                      newsItem.dataCriacao,
                      "YYYY-MM-DDTHH:mm:ss"
                    ).calendar()}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
