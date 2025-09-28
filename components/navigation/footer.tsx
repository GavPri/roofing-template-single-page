import { Logo } from "@/components/branding/logo";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    { text: "Austin", url: "#austin" },
    { text: "Round Rock", url: "#round-rock" },
    { text: "Cedar Park", url: "#cedar-park" },
    { text: "Georgetown", url: "#georgetown" },
    { text: "Pflugerville", url: "#pflugerville" },
    { text: "Leander", url: "#leander" },
  ];


  const quickLinks = [
    { text: "About Us", url: "#about" },
    { text: "Services", url: "#services" },
    { text: "Gallery", url: "#gallery" },
    { text: "Testimonials", url: "#testimonials" },
    { text: "Contact", url: "#contact" },
    { text: "Free Estimate", url: "#contact" },
  ];
  return (
    <section className="py-16 bg-card shadow-2xl rounded-t-2xl">
      <div className="container w-full">
        <footer className="px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Logo size="md" variant="default" className="mb-4" />
              <p className="text-secondary-foreground mb-4 text-sm leading-relaxed">
                Austin's premier roofing contractor with 9+ years of experience.
                Licensed & insured, serving Greater Austin with excellence.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <MapPin className="size-4 text-primary" />
                  <span>1234 Roofing Way, Austin, TX 78701</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <Phone className="size-4 text-primary" />
                  <a href="tel:+15125557663" className="hover:text-primary">
                    (512) 555-ROOF
                  </a>
                </div>
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <Mail className="size-4 text-primary" />
                  <a
                    href="mailto:info@toptierroofing.com"
                    className="hover:text-primary"
                  >
                    info@toptierroofing.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-secondary-foreground mt-3">
                Texas RRC License #RT-12345
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-bold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="mb-4 font-bold text-foreground">Service Areas</h3>
              <ul className="space-y-3">
                {serviceAreas.map((area, idx) => (
                  <li key={idx}>
                    <a
                      href={area.url}
                      className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                    >
                      {area.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/toptierroofing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Follow Top Tier Roofing on Facebook"
                  >
                    <Facebook className="size-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com/toptierroofing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Follow Top Tier Roofing on Twitter"
                  >
                    <Twitter className="size-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com/toptierroofing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Follow Top Tier Roofing on Instagram"
                  >
                    <Instagram className="size-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-foreground text-sm">
                © {currentYear} Top Tier Roofing. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#privacy"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
