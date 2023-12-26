import About from "./components/About";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Review from "./components/Review";

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
    </>
  );
};

export default App;
