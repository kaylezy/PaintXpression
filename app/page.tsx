import Main from "@/components/Main/Main";
import Hero from "@/components/Hero/Hero";
import Brand from "@/components/Brands/Brand";
import Services from "@/components/Service/Service";
import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner/Banner2";
import Testimonial from "@/components/Testimonial/Testimonial";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";


export default function HomePage() {
  return (
    <Main >
      <Hero />
      <Brand />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonial />
      <Newsletter />
      <Footer />
    </Main>
  );
}
