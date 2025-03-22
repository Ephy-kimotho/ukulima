import Landing from "./Landing";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

function HomePage() {
  return (
    <section>
      <Landing />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </section>
  );
}

export default HomePage;
