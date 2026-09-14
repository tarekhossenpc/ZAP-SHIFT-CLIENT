import HowItWorks from "../HowItWorksSection/HowItWorks";
import Services from "../../../components/serviceSection/Services/Services";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
