import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CaruselComo = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Klonlanmış elementlər nəzərə alınır
  const [isTransitioning, setIsTransitioning] = useState(false);
  const caruselRef = useRef(null);

  const caruselItems = [
    { title: "Ut Enim", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", date: "May 02,2023" },
    { title: "Insturctor", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", date: "May 03,2023" },
    { title: "Leader", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", date: "May 04,2023" },
    { title: "Manager", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", date: "May 05,2023" },
    { title: "Lorem Ipsum", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", date: "May 06,2023" },
  ];

  const totalItems = caruselItems.length;

  // Klonlanmış elementlər əlavə olunur
  const visibleItems = [
    caruselItems[totalItems - 1], // Sonuncu elementi əvvələ klonlayırıq
    ...caruselItems,
    caruselItems[0],
     // Birinci elementi sona klonlayırıq
    ...caruselItems, // Birinci elementi sona klonlayırıq
  ];

  const handleNext = () => {
    if (!isTransitioning) {
      setActiveIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setActiveIndex((prevIndex) => prevIndex - 1);
      setIsTransitioning(true);
    }
  };

  // Keçid bitdikdən sonra indeks yenilənməsi
  useEffect(() => {
    if (isTransitioning) {
      const transitionEndHandler = () => {
        setIsTransitioning(false);

        // Sonsuz dövrü idarə etmək
        if (activeIndex === 0) {
          setActiveIndex(totalItems); // Əvvələ keçid
        } else if (activeIndex === totalItems + 1) {
          setActiveIndex(0); // Sona keçid
        }
      };

      const caruselElement = caruselRef.current;
      caruselElement.addEventListener("transitionend", transitionEndHandler);

      return () => {
        caruselElement.removeEventListener("transitionend", transitionEndHandler);
      };
    }
  }, [activeIndex, isTransitioning, totalItems]);

  return (
    <div className="carusel_container">
      <div className="container relative">
        <div className="carusel">
          <div
            ref={caruselRef}
            className="carusel_wrap"
            style={{
              display: "flex",
              transform: `translateX(-${activeIndex * 33.33}%)`,
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {visibleItems.map((item, index) => (
              <div
                className="carusel_item"
                key={index}
                style={{
                  flex: "0 0 33.33%",
                  visibility:
                    activeIndex === 0 && index === visibleItems.length - 1
                      ? "hidden"
                      : "visible",
                }}
              >
                <div className="carusel_item_content">
                  <div className="carusel_title">{item.title}</div>
                  <p className="carusel_text">{item.text}</p>
                </div>
                <div className="carusel_line">
                  <div className="carusel_dot"></div>
                  <div className="carusel_date">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="carusel_icons">
            <div className="carusel_icon" onClick={handlePrev}>
              <FaChevronLeft />
            </div>
            <div className="carusel_icon" onClick={handleNext}>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaruselComo;
