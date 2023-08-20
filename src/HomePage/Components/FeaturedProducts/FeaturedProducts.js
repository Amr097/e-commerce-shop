"use client";
import { React, useEffect, useState, useRef } from "react";
import { featuredProducts } from "@/data";
import "./FeaturedProducts.scss";
import { v4 as uuidv4 } from "uuid";
import FeaturedItem from "./Components/FeaturedItem";

import {
  handleDrag,
  handleStart,
  handleMove,
  handleEnd,
  checkRadioBtn,
  changeArrowColor,
} from "./functions/handleSwipe";

const FeaturedProducts = () => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);

  useEffect(() => {
    let swipeLeft = document.querySelector("#swipeLeft");
    setArrowLeft(true);
    swipeLeft.checked = true;
  }, []);

  const swipeState = useRef({
    isSwiping: false,
    currentX: null,
    draggedX: null,
  });

  return (
    <div className="featured">
      <h2 className="heading-primary">Featured products</h2>

      <input
        type="radio"
        name="swipe"
        className="arrow__right"
        onClick={() => {
          checkRadioBtn("right-arrow");
          setArrowLeft(false);
        }}
        style={
          arrowRight ? { pointerEvents: "none" } : { pointerEvents: "all" }
        }
      ></input>

      <input
        type="radio"
        name="swipe"
        className="arrow__left"
        onClick={() => {
          checkRadioBtn("left-arrow");
          setArrowRight(false);
        }}
        style={arrowLeft ? { pointerEvents: "none" } : { pointerEvents: "all" }}
      ></input>

      <input type="radio" name="swipe-page" id="swipeLeft"></input>

      <input type="radio" name="swipe-page" id="swipeRight"></input>

      <ul
        className="featured__list"
        onMouseDown={(e) => {
          handleStart(e, swipeState);
        }}
        onTouchStart={(e) => {
          handleStart(e, swipeState);
        }}
        onTouchMove={(e) => {
          handleMove(e, swipeState);
        }}
        onDragEnd={(e) => {
          handleDrag(e, swipeState, setArrowLeft, setArrowRight);
        }}
        onTouchEnd={(e) => {
          handleEnd(e, swipeState, setArrowLeft, setArrowRight);
        }}
        onMouseUp={(e) => {
          handleEnd(e, swipeState, setArrowLeft, setArrowRight);
        }}
        onMouseLeave={(e) => {
          handleEnd(e, swipeState, setArrowLeft, setArrowRight);
        }}
      >
        {featuredProducts.map((item) => (
          <FeaturedItem item={item} key={uuidv4()} />
        ))}
      </ul>

      <label
        className="featured__pagination--left"
        htmlFor="swipeLeft"
        onClick={() => {
          changeArrowColor("left", setArrowLeft, setArrowRight);
        }}
      ></label>
      <label
        className="featured__pagination--right"
        htmlFor="swipeRight"
        onClick={() => {
          changeArrowColor("right", setArrowLeft, setArrowRight);
        }}
      ></label>
    </div>
  );
};

export default FeaturedProducts;
