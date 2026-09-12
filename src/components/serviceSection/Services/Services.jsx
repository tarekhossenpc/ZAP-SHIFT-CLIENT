import servicesData from "../servicesData/servicesData";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  return (
    <div className="my-3 bg-secondary rounded-3xl p-4">
      {/* heading section */}
      <div>
        <h1 className="text-center mt-5 text-white font-bold text-3xl ">
          Our Services
        </h1>
        <p className="text-center my-3 text-neutral text-base ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      {/* heading section */}

      {/* service card */}
      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {servicesData.map((service) => (
          <ServicesCard key={service.id} {...service}></ServicesCard>
        ))}
      </section>
      {/* service card */}
    </div>
  );
};

export default Services;
