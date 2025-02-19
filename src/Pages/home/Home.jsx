import Layout from "../../Components/constant/Layout";
import Contact from "../../Components/home sections/Contact";
import EcofactorAccess from "../../Components/home sections/EcofactorAccess";
import HeroSection from "../../Components/home sections/HeroSection";
import Team from "../../Components/home sections/Team";
import Testimonial from "../../Components/home sections/Testimonial";

const Home = () => {
  return <>
    <Layout>
      <HeroSection />
      <Testimonial />
      <Testimonial />
      <EcofactorAccess />
      <Team />
      <Testimonial />
      <Contact />
    </Layout>
  </>;
};

export default Home;
