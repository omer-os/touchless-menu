"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import IconButton from "../../../components/elements/iconbutton/IconButton";
import MenuCategoryCard from "../../modules/cards/MenuCategoryCard";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

type categoryType = {
  name: string;
  img: string;
  itemsAmount: number;
  link: string;
};

export default function CategoriesList(props: { categories: categoryType[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;

    setScrollLeft(scrollLeft > 0);
    setScrollRight(scrollLeft < maxScrollLeft - 1); // Add a small offset to account for rounding errors
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    if (direction === "right") {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    } else {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-baseline md:mt-0 mt-6">
        <div className="text-2xl font-bold">Categories</div>
        <div className="text-blue-500 hover:underline cursor-pointer">
          See all
        </div>
      </div>

      <div className="relative p-3">
        <div
          ref={scrollContainerRef}
          className="flex scroll-pl-10 snap-x snap-mandatory p-1 pb-4 gap-4 overflow-x-scroll"
        >
          {props.categories.map((category, index) => (
            <MenuCategoryCard
              key={category.name + index}
              name={category.name}
              href={category.link}
              img={category.img}
              numberOfItems={category.itemsAmount}
              intent={"regular"}
              className="snap-start"
            />
          ))}
        </div>
        {scrollLeft && (
          <div>
            <IconButton
              rounded={"full"}
              intent={"white"}
              className="absolute shadow-xl top-1/2 z-20 left-2 -translate-y-1/2"
              onClick={() => scroll("left")}
            >
              <FiArrowLeft />
            </IconButton>
          </div>
        )}
        {scrollRight && (
          <div>
            <IconButton
              rounded={"full"}
              intent={"white"}
              className="absolute shadow-xl top-1/2 z-20 right-2 -translate-y-1/2"
              onClick={() => scroll("right")}
            >
              <FiArrowRight />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}
