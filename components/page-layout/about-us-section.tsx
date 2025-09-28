import { ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "../branding/logo";

const company = {
  title: "Top Tier Roofing",
  subtitle: "Excellence Above Every Home",
  bio: `For over 9 years, Top Tier Roofing has been Austin's most trusted roofing contractor. We're a local, family-owned business dedicated to protecting homes and businesses throughout the Greater Austin area with superior craftsmanship and unmatched customer service.`,
  vision: `We believe every property deserves the highest quality roofing protection. Our commitment to excellence, combined with our deep knowledge of Austin's unique weather challenges, makes us the contractor of choice for discerning property owners.`,
  outro: `Join over 2,500 satisfied customers who trust Top Tier Roofing to protect their most valuable investments. Experience the difference that local expertise and genuine care make.`,
  trustPoints: [
    { id: "01", item: "9+ Years Serving Austin Area", type: "Experience" },
    { id: "02", item: "2,500+ Completed Projects", type: "Track Record" },
    { id: "03", item: "Licensed & Fully Insured", type: "Protection" },
    { id: "04", item: "A+ BBB Rating", type: "Reputation" },
    { id: "05", item: "5-Star Google Reviews", type: "Customer Satisfaction" },
    { id: "06", item: "Manufacturer Certified", type: "Expertise" },
    { id: "07", item: "Local Family-Owned Business", type: "Community" },
    { id: "08", item: "Free Estimates & Inspections", type: "Value" },
  ],
};

const AboutUs = () => {
  return (
    <section className="py-12 bg-card rounded-2xl shadow-2xl px-4" id="about">
      <div className="container">
        <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-12">
          <div className="w-full md:w-1/3 md:pr-4">
            <div className="sticky top-20 md:p-6">
              <div className="mb-8">
                <div className="mb-6 flex items-center gap-4">
                  <Logo />
                  <div>
                    <p className="text-secondary-foreground text-sm">
                      {company.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <nav>
                <div className="py-4">
                  <a
                    href="tel:+15125557663"
                    className="group flex p-0 text-start text-xl font-medium hover:bg-transparent sm:text-2xl"
                  >
                    <span className="border-border border-b-2 pb-0.5 transition-colors flex items-center gap-2 text-primary">
                      <Phone className="h-5 w-5 text-primary" />
                      Call Us Now
                    </span>
                    <ArrowUpRight className="ml-1 h-6 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-primary " />
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:p-6">
            <div className="max-w-4xl">
              <h2 className="mb-12 text-4xl lg:text-7xl font-semibold text-foreground">
                Why Austin Homeowners{" "}
                <span className="text-primary font-bold">
                  Trust Top Tier Roofing
                </span>
              </h2>

              <div className="space-y-12">
                <p className="w-full text-2xl font-medium leading-[36px] md:max-w-2xl text-secondary-foreground">
                  {company.bio}
                </p>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <h2 className="text-2xl font-medium text-foreground">
                    Our Commitment
                  </h2>
                  <p className="leading-relaxed text-secondary-foreground">
                    {company.vision}
                  </p>
                </div>

                <div className="my-12">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="Top Tier Roofing team working on residential roof in Austin, Texas"
                    className="rounded-2xl object-cover"
                  />
                </div>

                <div>
                  <h2 className="mb-8 text-2xl font-medium text-foreground">
                    Why Choose Us
                  </h2>
                  <div className="space-y-6">
                    {company.trustPoints.map(({ id, item, type }) => (
                      <div
                        key={id}
                        className="flex items-center justify-between border-b py-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-secondary-foreground font-mono text-sm">
                            {id}
                          </span>
                          <span className="text-base text-primary">{item}</span>
                        </div>
                        <span className="text-secondary-foreground text-sm">
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <p className="leading-relaxed text-secondary-foreground">
                    {company.outro}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
