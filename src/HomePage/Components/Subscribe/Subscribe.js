import React from "react";
import Image from "next/image";
import "./Subscribe.scss";
import { BsArrowRight } from "react-icons/bs";
import { offerHome } from "@/data";
import NewsForm from "./Components/NewsForm";

const Subscribe = () => {
  return (
    <>
      <div className="offer">
        <div className="offer__mask"></div>
        <Image
          src={offerHome.image}
          alt="special offer"
          width={1500}
          height={1500}
          placeholder="blur"
          blurDataURL="data:images/blur.webp"
          className="offer__image"
        />
        <div className="offer__content">
          <h4 className="offer__heading">Limited Offer</h4>
          <h2 className="offer__title">{offerHome.text}</h2>
          <button className=" btn-primary offer__btn">
            {offerHome.btnText}
            <span className="btn__arrow">
              {" "}
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="newsletter">
        {" "}
        <h2 className="heading-medium-2 newsletter__title">
          Subscribe to our newsletter to get updates to our latest collections
        </h2>
        <p className="newsletter__text text-small">
          Get 20% off on your first order just by subscribing to our newsletter.
        </p>
        <NewsForm />
        <p className="text-small text-small--blue">
          You will be able to unsubscribe at any time. <br />
          Read our Privacy Policy{" "}
          <a href="" className="link-underline">
            here
          </a>
        </p>
      </div>
    </>
  );
};

export default Subscribe;
