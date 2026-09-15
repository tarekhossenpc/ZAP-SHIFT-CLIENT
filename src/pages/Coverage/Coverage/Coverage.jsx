import { useLoaderData } from "react-router";
import LocationMap from "../Map/LocationMap";

const Coverage = () => {
  const serviceCenters = useLoaderData()
  // console.log(serviceCenters)
  return (
    <div className="bg-white max-w-375 mx-auto rounded-2xl py-20 px-27.25">
      <h1 className="text-5xl font-bold text-secondary">
        We are available in 64 districts
      </h1>
      <div className="py-12.5">
        <button className="bg-primary rounded-2xl">Search</button>
      </div>
      <h3 className="text-3xl mb-4 font-bold text-secondary">
        We provide services almost all over Bangladesh
      </h3>
      {/* map */}
      <LocationMap serviceCenters={serviceCenters}></LocationMap>
    </div>
  );
};

export default Coverage;
