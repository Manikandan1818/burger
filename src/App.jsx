import About from "./components/About";
import Category from "./components/Category";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Review from "./components/Review";
import Scroll from "./components/Scroll";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Category />
      <Promo />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Footer />
      <Scroll />
    </>
  );
};

export default App;
