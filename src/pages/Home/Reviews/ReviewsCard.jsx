import { FaQuoteRight } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  console.log(review);
  const { review: testimonial, userName, user_photoURL,designation } = review;
  return (
    <div className="w-81 rounded-[22px] bg-white p-6.5 shadow-sm">
      {/* Quote Icon */}
      <FaQuoteRight className="mb-3 text-[28px] text-[#c9e0e3]" />

      {/* Description */}
      <p className="text-[13px] leading-5 text-[#555555]">{testimonial}</p>

      {/* Dashed Divider */}
      <div className="my-4.5 border-t border-dashed border-[#2b6670]"></div>

      {/* Author */}
      <div className="flex items-center gap-3">
         
          <img className="rounded-full h-9.5 w-9.5 shrink-0 bg-[#00515a]" src={user_photoURL} alt="" />
         
        {/* Author Information */}
        <div>
          <h3 className="text-[15px] font-bold text-[#003f47]">{userName}</h3>

          <p className="mt-0.5 text-[12px] text-[#555555]">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;

