"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
}

const GalleryGrid = ({ items, className }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? items.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === items.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  // Fixed: Use useEffect instead of useState for document event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]); // Dependency array with selectedIndex

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={cn(
          "grid gap-4 auto-rows-[200px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "group relative overflow-hidden rounded-lg bg-muted cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
              // Create varied sizes for visual interest
              index % 7 === 0 && "md:col-span-2 md:row-span-2",
              index % 11 === 0 && "sm:col-span-2",
              index % 13 === 0 && "md:row-span-2"
            )}
            onClick={() => openLightbox(index)}
          >
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-balance">{item.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          {/* Main Image */}
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={items[selectedIndex].src || "/placeholder.svg"}
              alt={items[selectedIndex].alt}
              className="max-h-full max-w-full object-contain"
            />
            {items[selectedIndex].title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <p className="text-lg font-medium text-balance">
                  {items[selectedIndex].title}
                </p>
              </div>
            )}
          </div>

          {/* Image Counter */}
          {items.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const Gallery = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Before and after storm damage repair on residential roof in Austin, Texas - Top Tier Roofing",
      title: "Storm Damage Repair - Cedar Park",
      category: "Storm Repairs",
    },
    {
      id: "2",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "New residential shingle roof installation in Round Rock, Texas - Top Tier Roofing",
      title: "New Residential Installation - Round Rock",
      category: "Residential",
    },
    {
      id: "3",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Commercial flat roof TPO installation in Austin, Texas - Top Tier Roofing",
      title: "Commercial TPO Roof - Austin",
      category: "Commercial",
    },
    {
      id: "4",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Emergency roof tarping service in Georgetown, Texas - Top Tier Roofing",
      title: "Emergency Repair - Georgetown",
      category: "Emergency",
    },
    {
      id: "5",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Hail damage repair before and after in Pflugerville, Texas - Top Tier Roofing",
      title: "Hail Damage Repair - Pflugerville",
      category: "Storm Repairs",
    },
    {
      id: "6",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Residential roof replacement with architectural shingles in Austin, Texas - Top Tier Roofing",
      title: "Roof Replacement - Austin",
      category: "Residential",
    },
    {
      id: "7",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Commercial EPDM roofing project in Leander, Texas - Top Tier Roofing",
      title: "Commercial EPDM - Leander",
      category: "Commercial",
    },
    {
      id: "8",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Emergency storm damage temporary repair in Lakeway, Texas - Top Tier Roofing",
      title: "Emergency Storm Repair - Lakeway",
      category: "Emergency",
    },
  ];

  // Show only 4 images on mobile and tablet devices
  const displayItems = galleryItems.slice(0, 4);

  return (
    <section className="py-16" id="gallery">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Our Austin Roofing Projects
            </h2>
            <p className="text-secondary-foreground max-w-2xl text-lg tracking-tight md:text-xl">
              See our quality craftsmanship in action across Austin and the
              Greater Austin area. From emergency repairs to complete
              installations.
            </p>
          </div>
          {/* Show 4 images on mobile/tablet, all images on desktop */}
          <div className="lg:hidden">
            <GalleryGrid items={displayItems} />
          </div>
          <div className="hidden lg:block">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery };
