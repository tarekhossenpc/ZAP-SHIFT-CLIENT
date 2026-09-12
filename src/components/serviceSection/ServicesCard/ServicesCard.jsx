import serviceImg from '../../../assets/othersImg/service.png'
const ServiceCard = ({
  title,
  description,
  featured,
}) => {
  return (
    <div
      className={`
        h-full
        rounded-2xl
        p-6
        text-center
        transition
        duration-300
        ${
          featured
            ? "bg-lime-300"
            : "bg-white"
        }
      `}
    >
      {/* Icon */}
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50">
        <span className="text-2xl"><img src={serviceImg} alt="" /></span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg font-bold text-secondary">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-neutral-accent">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
