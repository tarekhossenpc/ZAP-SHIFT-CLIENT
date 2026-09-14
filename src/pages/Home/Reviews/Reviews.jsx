import { use } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div className="Max-w-full mx-auto  mt-6">
      <div className="text-center mb-10">
        <h2>Reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur
          eius quia commodi! Magni laboriosam aut officiis fugiat deleniti
          harum. Cum, provident sint! Nulla nostrum quo illo qui incidunt et?
        </p>
      </div>
      <Swiper 
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 30,
          stretch: "40%",
          scale: 0.9,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewsCard review={review}></ReviewsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
