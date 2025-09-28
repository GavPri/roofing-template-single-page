import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-card shadow-2xl rounded-2xl grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-4 lg:p-16 lg:items-start text-left">
            <h1 className="my-6 text-foreground text-4xl font-bold lg:text-6xl">
              Austin's #1 Roofing Contractor
            </h1>
            <p className="text-foreground mb-4 max-w-xl lg:text-xl">
              Serving Greater Austin with Excellence for 9+ Years
            </p>
            <div className="mb-8 flex flex-wrap gap-4 text-sm lg:text-base text-primary">
              <span className="flex items-center gap-2">
                ✓ Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                ✓ 24/7 Emergency Service
              </span>
              <span className="flex items-center gap-2">
                ✓ Free Inspections
              </span>
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild variant={'default'}>
                <a href="tel:+15125557663" className="flex items-center gap-2">
                  <Phone className="size-4" />
                  Call Us
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/#contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="Professional roofing installation project in Austin, Texas - Top Tier Roofing"
            className="h-full w-full object-cover rounded-b-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
