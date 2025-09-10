import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import AiTools from "../components/home/AiTools";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div className="bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
    </div>
  );
};

export default Home;
