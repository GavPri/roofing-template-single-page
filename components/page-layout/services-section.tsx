"use client";

import { Home, Building, CloudRain, AlertTriangle, Search, Droplets } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Residential Roofing",
      description:
        "Professional new roof installations and replacements for homes throughout Austin and surrounding areas.",
      items: ["New Installations", "Roof Replacements", "Shingle Roofing"],
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Commercial Roofing",
      description:
        "Expert commercial roofing solutions including flat roofs, TPO, and EPDM systems for Austin businesses.",
      items: ["Flat Roofs", "TPO Systems", "EPDM Roofing"],
    },
    {
      icon: <CloudRain className="h-6 w-6" />,
      title: "Storm Damage Repair",
      description:
        "Fast storm damage repair services with insurance claims assistance for Greater Austin properties.",
      items: ["Insurance Claims", "Hail Damage Repair", "Wind Damage Repair"],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Emergency Roofing",
      description:
        "24/7 emergency roofing response with tarping and temporary repairs throughout Austin area.",
      items: ["24/7 Response", "Emergency Tarping", "Temporary Repairs"],
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Roof Inspections",
      description:
        "Comprehensive roof inspections with free estimates and maintenance checkups for Austin homes.",
      items: ["Free Estimates", "Maintenance Checkups", "Damage Assessment"],
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Gutter Services",
      description:
        "Complete gutter installation, repair, and cleaning services for Austin and surrounding communities.",
      items: ["Gutter Installation", "Gutter Repair", "Gutter Cleaning"],
    },
  ];

  return (
    <section className="py-32" id="services">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Complete Roofing Services in Austin
            </h2>
            <p className="text-secondary-foreground max-w-2xl text-lg tracking-tight md:text-xl">
              From residential installations to emergency repairs, we provide
              comprehensive roofing solutions throughout Austin and Greater
              Austin area.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm bg-card"
              >
                <div className="flex items-center gap-4 text-primary">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-secondary-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-sm font-medium text-secondary-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };
