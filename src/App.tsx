import {AboutUs} from "./components/about-us/AboutUs";
import {Footer} from "./components/footer/Footer";
import Header from "./components/header/Header";
import {Intro} from "./components/intro/Intro";
import {OurServices} from "./components/our-services/OurServices";
import {RecentWorks} from "./components/recent-works/RecentWorks";
import {Testimonials} from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <AboutUs />
      <OurServices />
      <RecentWorks />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
