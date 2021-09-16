import React, { useState } from "react";
import { sliders } from "../modals/sliders";
function Sliders() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section className="promo">
      {/* content */}
      <div className="promo__content">
        {/* item */}
        {sliders &&
          sliders.map((slider, index) => {
            return (
              <a
                key={`slider-${index}`}
                className={
                  index === activeItem
                    ? "promo__item promo__item_light promo__item_active"
                    : index === activeItem + 1
                    ? "promo__item promo__item_light promo__item_next"
                    : "promo__item promo__item_light promo__item_far"
                }
              >
                <span className="promo__item__bg">
                  <i
                    className="promo__item__bg__picture"
                    style={{
                      backgroundImage: `url(${slider.featured_image})`,
                    }}
                  />
                </span>
                <span className="promo__item__about">
                  <span className="promo__item__about__content">
                    <strong className="promo__item__about__title">
                      {slider.heading}
                    </strong>
                    <div className="arrow-icon">
                      <div>
                        <img src="/images/right-arrow.png" alt="" />
                      </div>
                      <div className="about-craft">{slider.description}</div>
                    </div>
                  </span>
                </span>
              </a>
            );
          })}

        {/* item */}
      </div>
      {/* next */}
      <div
        className="promo__next"
        onClick={() =>
          setActiveItem(activeItem < sliders.length - 2 ? activeItem + 1 : 0)
        }
      />
      {/* mouse */}
      <div className="ui-mouse">
        <i className="ui-mouse__wheel" />
      </div>
    </section>
  );
}

export default Sliders;
