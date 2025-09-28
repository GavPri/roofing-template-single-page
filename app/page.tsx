import { Navbar } from "@/components/navigation/nav-bar";
import { Hero } from "@/components/page-layout/hero-section";
import { Services } from "@/components/page-layout/services-section";
import { Gallery } from "@/components/page-layout/gallery-section";
import { AboutUs } from "@/components/page-layout/about-us-section";
import { Testimonials } from "@/components/page-layout/testimonial-section";
import { ContactUs } from "@/components/page-layout/contact-us";
import { Footer } from "@/components/navigation/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <Gallery />
        <AboutUs />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer/>
    </div>
  );
}
