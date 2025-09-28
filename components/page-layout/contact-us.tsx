import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactUs = () => {
  return (
    <section
      className="py-8 text-secondary-foreground bg-card rounded-2xl shadow-2xl my-4"
      id="contact"
    >
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="pl-2 text-left lg:text-left">
              <h2 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-foreground">
                Get Your{" "}
                <span className="text-primary font-bold">
                  Free Roofing Estimate
                </span>{" "}
                Today
              </h2>
              <p className="text-secondary-foreground">
                Ready to protect your property with quality roofing? Contact Top
                Tier Roofing for your free estimate and expert consultation.
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0 bg-card rounded-2xl shadow-xl p-6">
              <h3 className="mb-6 text-left text-2xl font-semibold lg:text-left text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary">Top Tier Roofing</p>
                  <p className="text-sm text-card-foreground">
                    Excellence Above Every Home
                  </p>
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Address:</p>
                  <p className="text-secondary-foreground">
                    1234 Roofing Way
                    <br />
                    Austin, TX 78701
                  </p>
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Phone:</p>
                  <a
                    href="tel:+15125557663"
                    className="underline text-secondary-foreground"
                  >
                    (512) 555-ROOF
                  </a>
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Email:</p>
                  <a
                    href="mailto:info@toptierroofing.com"
                    className="underline text-secondary-foreground"
                  >
                    info@toptierroofing.com
                  </a>
                </div>
                <div>
                  <p className="font-bold text-card-foreground">
                    Business Hours:
                  </p>
                  <p className="text-sm text-secondary-foreground">
                    Mon-Fri: 7AM-7PM
                    <br />
                    Sat: 8AM-5PM
                    <br />
                    <span className="text-primary font-semibold">
                      24/7 Emergency Service
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 bg-card rounded-2xl shadow-2xl border p-10">
            <form className="flex flex-col gap-6">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(512) 555-0123"
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="address">Property Address *</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="1234 Main St, Austin, TX 78701"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="service">Service Needed *</Label>
                <Select name="service">
                  <SelectTrigger>
                    <SelectValue
                      id="select-a-service"
                      placeholder="Select a service"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential-roofing">
                      Residential Roofing
                    </SelectItem>
                    <SelectItem value="commercial-roofing">
                      Commercial Roofing
                    </SelectItem>
                    <SelectItem value="storm-damage">
                      Storm Damage Repair
                    </SelectItem>
                    <SelectItem value="emergency-roofing">
                      Emergency Roofing
                    </SelectItem>
                    <SelectItem value="roof-inspection">
                      Roof Inspection
                    </SelectItem>
                    <SelectItem value="gutter-services">
                      Gutter Services
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="referral">How did you hear about us?</Label>
                <Select name="referral">
                  <SelectTrigger>
                    <SelectValue
                      id="select-an-option"
                      placeholder="Select an option"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="referral">
                      Friend/Family Referral
                    </SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="yard-sign">Yard Sign</SelectItem>
                    <SelectItem value="online-ad">
                      Online Advertisement
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  placeholder="Tell us about your roofing project, any specific concerns, or questions you have..."
                  id="message"
                  name="message"
                />
              </div>
              <Button type="submit" className="w-full">Get Free Estimate</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactUs };
