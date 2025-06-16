import Banner from "../components/sections/hero";
import WhoWeAre from "../components/sections/whoWeAre";
import ServicesOverview from "../components/sections/wwd";
import TestimonialsSection from "../components/sections/testimonial";
import PartnersClientsSection from "../components/sections/clients";
import Maps from "../components/sections/maps";

const Home = () => {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <ServicesOverview />
      <TestimonialsSection />
      <PartnersClientsSection />
      <Maps />
    </>
  );
};

export default Home;
