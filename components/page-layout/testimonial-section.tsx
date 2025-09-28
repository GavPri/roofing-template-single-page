"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials1 = [
  {
    name: "Sarah M.",
    location: "Cedar Park",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Top Tier Roofing replaced our storm-damaged roof in Cedar Park. Professional, fast, and excellent quality!",
    rating: 5,
  },
  {
    name: "Mike R.",
    location: "Round Rock",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Best roofing company in Austin! They handled our insurance claim perfectly.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Austin",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Emergency roof repair on Sunday night - they were there within 2 hours!",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Georgetown",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Exceptional work on our commercial building. Top Tier Roofing exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    location: "Pflugerville",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "From estimate to completion, everything was handled professionally. Highly recommend!",
    rating: 5,
  },
  {
    name: "Robert H.",
    location: "Leander",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Quality workmanship and fair pricing. They truly are Austin's premier roofing contractor.",
    rating: 5,
  },
];

const testimonials2 = [
  {
    name: "Maria G.",
    location: "Lakeway",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Fantastic experience! Our new roof looks amazing and the team was incredibly professional.",
    rating: 5,
  },
  {
    name: "James P.",
    location: "Bee Cave",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Fast response for hail damage repair. Insurance process was seamless with their help.",
    rating: 5,
  },
  {
    name: "Amanda W.",
    location: "Austin",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Top Tier Roofing saved us thousands on our roof replacement. Excellent quality and service!",
    rating: 5,
  },
  {
    name: "Carlos M.",
    location: "Round Rock",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "They completed our roof installation ahead of schedule and under budget. Amazing team!",
    rating: 5,
  },
  {
    name: "Susan B.",
    location: "Cedar Park",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "Local family business that truly cares. Best roofing experience we've ever had.",
    rating: 5,
  },
  {
    name: "Kevin L.",
    location: "Georgetown",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "9+ years in business and it shows. Expertise and professionalism from start to finish.",
    rating: 5,
  },
];

const Testimonials = () => {
  const plugin1 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  const plugin2 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
      direction: "backward",
    })
  );
  return (
    <section className="py-32" id="testimonials">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="mb-2 text-left text-3xl font-semibold lg:text-5xl text-foreground">
          What Austin Customers{" "}
          <span className="text-primary font-bold">Say About Us</span>
        </h2>
        <p className="text-secondary-foreground lg:text-lg text-left max-w-2xl">
          Don't just take our word for it. Here's what our satisfied customers
          across Austin and surrounding areas have to say about our roofing
          services.
        </p>
        <Button asChild className="mt-6">
          <a
            href="https://www.google.com/maps/place/Top+Tier+Roofing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="size-4" />
            View All Google Reviews
          </a>
        </Button>
      </div>
      <div className="lg:container">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin1.current]}
            onMouseLeave={() => plugin1.current.play()}
          >
            <CarouselContent>
              {testimonials1.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 h-64 p-6 select-none bg-card shadow-xl flex flex-col">
                    <div className="mb-4">
                      <div className="flex gap-4 mb-3">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-secondary-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-primary text-primary"
                            />
                          )
                        )}
                      </div>
                    </div>
                    <q className="text-secondary-foreground flex-1">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin2.current]}
            onMouseLeave={() => plugin2.current.play()}
          >
            <CarouselContent>
              {testimonials2.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 h-64 p-6 select-none bg-card shadow-xl flex flex-col">
                    <div className="mb-4">
                      <div className="flex gap-4 mb-3">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-secondary-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-primary text-primary"
                            />
                          )
                        )}
                      </div>
                    </div>
                    <q className="text-secondary-foreground flex-1">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
