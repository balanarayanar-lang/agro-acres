import {AboutUs} from "../about-us/AboutUs";
import {Footer} from "../footer/Footer";
import Header from "../header/Header";
import {Intro} from "../intro/Intro";
import {OurServices} from "../our-services/OurServices";
import {RecentWorks} from "../recent-works/RecentWorks";
import {Testimonials} from "../testimonials/Testimonials";

export const LandingPage = () => (
  <>
    <Header />
    <main>
      <Intro />
      <AboutUs />
      <OurServices />
      <RecentWorks />
      <Testimonials />
      <Footer />
    </main>
  </>
);
