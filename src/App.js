import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Mobmenu from "./components/Mobmenu";
import Navbar from "./components/Navbar";
import Totop from "./components/Totop";
import About from "./pages/About";
import Business from "./pages/Business";
import ChooseUs from "./pages/ChooseUs";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import ITServices from "./pages/ITServices";
import ManagedIT from "./pages/ManagedIT";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";

function App() {
  return (
    <Router>
      <Navbar />
      <Mobmenu />
      <Totop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/choose-us">
          <ChooseUs />
        </Route>
        <Route path="/faqs">
          <FAQs />
        </Route>
        <Route path="/it-services">
          <ITServices />
        </Route>
        <Route path="/managed-it">
          <ManagedIT />
        </Route>
        <Route path="/industries">
          <Industries />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
