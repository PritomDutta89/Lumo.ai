import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import AiTools from "../components/home/AiTools";
import Testimonial from "../components/home/Testimonial";
import Plan from "../components/home/Plan";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div className="bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </div>
  );
};

export default Home;
