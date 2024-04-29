import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from "../ProductCard";

const LatestProductSection = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="min-[400px]:basis-1/2 min-[550px]:basis-1/3 sm:basis-1/4 lg:basis-1/5">
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LatestProductSection;
