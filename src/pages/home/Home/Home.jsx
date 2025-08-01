import OurServices from "../Services/OurServices";
import ClientSlider from "../Clients/ClientSlider";
import BenefitsSection from "../Benifits/BenefitsSection";
import BeMerchant from "../BeMerchant/BeMerchant";
import Banner from "../Banner/Banner";
import HowItWorks from "../howitworks/HowItWorks";
import Reviews from "../Reviews/Reviews";
import Faq from "../Faq/Faq";
import { useEffect } from "react";

const Home = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
     <div className="max-w-7xl mx-auto">
       <Banner />
      <HowItWorks/>
      <OurServices />
      <ClientSlider />
      <BenefitsSection />
      <BeMerchant />
      <Reviews/>
      <Faq/>
     </div>
    </>
  );
};

export default Home;
