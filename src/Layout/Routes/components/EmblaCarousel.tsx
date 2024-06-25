import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "../components/EmblaCarouselDotButtons";
import "../../../App.css";
import { useEffect, useState } from "react";

type SlideType = {
  imageUrl: string;
  text: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [_, setSelectedSlide] = useState<number | null>(null);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Run on initial load

    return () => {
      emblaApi.off("select", onSelect); // Cleanup
    };
  }, [emblaApi]);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.imageUrl}>
              <img
                className="embla__slide__img"
                src={slide.imageUrl}
                alt="Your alt text"
              />

              <div className="embla__slide__text">
                {slide.text}
                <div className="flex gap-[10px] [&>a]:p-[15px] [&>a]:rounded-[3px] [&>a]:cursor-pointer [&>a]:transition-all [&>a]:duration-500">
                  <a className="border-[1px] bg-brown border-brown hover:text-brown hover:bg-transparent hover:border hover:border-brown">
                    Order Now
                  </a>
                  <a className="border-[1px] bg-transparent border-white hover:border-[1px] hover:border-brown hover:bg-brown">
                    Menu
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: any) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
