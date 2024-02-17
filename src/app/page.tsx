"use client";

import { BannerModel } from "@/model/banner";
import bannerService from "@/service/banner";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { getBreakpoint } from "@/hook/breakpoints";

export default function Home() {
  const [banners, setBanners] = useState<BannerModel[]>([]);

  const breakpointMd = getBreakpoint("md");
  const [widthSize, setWidthSize] = useState<number | null>(null);

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
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <main className=""></main>
    </div>
  );
}
