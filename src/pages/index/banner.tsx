import React, { FC } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getDummyImage, getDummyImage2 } from "utils/product";
import { Box } from "zmp-ui";

const images = ['https://benhvienthammykangnam.vn/wp-content/uploads/2023/03/benh-vien-tham-my-kangnam.jpg','https://doanhnghiepvathuongmai.vn/public/storage/uploads/images/QA/t11.2022/h1%20(2).jpg']

export const Banner: FC = () => {
  return (
    <Box className="bg-white" pb={4}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay
        loop
        cssMode
      >
        { images
          .map((i) => getDummyImage2(`${i}`))
          .map((banner, i) => (
            <SwiperSlide key={i} className="px-4">
              <Box
                className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
                style={{ backgroundImage: `url(${banner})` }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};
