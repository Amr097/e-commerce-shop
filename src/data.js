const products = [
  {
    id: 1,
    category: "Men",
    type: "jacket",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/amir-esrafili-mzBfIKuNBxI-unsplash.jpg",

    stock: 1,
    rating: 4.5,
    numReviews: 12,
    bestSeller: true,
  },
  {
    id: 2,
    category: "Women",
    type: "blazer",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L", "XL"],
    image: "/images/laura-chouette-Pv3DjB4Q7nk-unsplash.jpg",

    stock: 3,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 3,
    category: "Men",
    type: "t-shirt",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/pexels-вальдемар-7643904.jpg",

    stock: 21,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 4,
    category: "Women",
    type: "t-shirt",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/pexels-dziana-hasanbekava-7626613.jpg",

    stock: 1,
    rating: 4.5,
    numReviews: 12,
  },
];

const featured = [
  {
    id: 1,
    headingStart: "Level up your style with our",
    season: "Summer",
    headingEnd: "collections",
    btnText: "Shop now",
    image: "/images/swiper1.jpg",
  },
  {
    id: 2,
    headingStart: "Level up your style with our",
    season: "Summer",
    headingEnd: "collections",
    btnText: "Shop now",
    image: "/images/swiper2.jpg",
  },
  {
    id: 3,
    headingStart: "Level up your style with our",
    season: "Summer",
    headingEnd: "collections",
    btnText: "Shop now",
    image: "/images/swiper3a.jpg",
  },
  {
    id: 4,
    headingStart: "Level up your style with our",
    season: "Summer",
    headingEnd: "collections",
    btnText: "Shop now",
    image: "/images/swiper4a.jpg",
  },

  {
    id: 5,
    headingStart: "Level up your style with our",
    season: "Summer",
    headingEnd: "collections",
    btnText: "Shop now",
    image: "/images/swiper5b.jpg",
  },
];

const currated = [
  {
    id: 1,

    btnText: "Best Seller",
    image: "/images/currated1.2.jpg",
  },
  {
    id: 2,

    btnText: "Shop Men",
    image: "/images/currated2.1.jpg",
  },
  {
    id: 3,

    btnText: "Shop Women",
    image: "/images/currated3.jpg",
  },
  {
    id: 4,

    btnText: "Shop Women",
    image: "/images/currated4.jpg",
  },
];
//{
//   id: 1,
//   category: "Men",
//   type: "t-shirt",
//   price: 250,
//   colors: ["red", "grey"],
//   size: ["S", "M", "L"],
//   images: [
//     "/images/portrait-happy-handsome-young-man-posing-isolated-background.jpg",
//     "/images/portrait-happy-handsome-young-man-posing-isolated-background.jpg",
//     "/images/portrait-happy-handsome-young-man-posing-isolated-background.jpg",
//     "/images/portrait-happy-handsome-young-man-posing-isolated-background.jpg",
//   ],
//   stock: 1,
//   rating: 4.5,
//   numReviews: 12,
// },
// {
//   id: 1,
//   category: "Women",
//   type: "shirt",
//   price: 250,
//   colors: ["red", "grey"],
//   size: ["S", "M", "L"],
//   images: [
//     "/images/pexels-карина-каржавина-7945542.jpg",
//     "/images/pexels-карина-каржавина-7945542.jpg",
//     "/images/pexels-карина-каржавина-7945542.jpg",
//     "/images/pexels-карина-каржавина-7945542.jpg",
//   ],
//   stock: 1,
//   rating: 4.5,
//   numReviews: 12,
// },

const featuredProducts = [
  {
    id: 1,
    category: "Men",
    type: "jacket",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/featured1.1.jpg",

    stock: 1,
    rating: 4.5,
    numReviews: 12,
    bestSeller: true,
    sale: 5,
  },
  {
    id: 2,
    category: "Women",
    type: "blazer",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L", "XL"],
    image: "/images/featured2.1.jpg",

    stock: 3,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 3,
    category: "Men",
    type: "t-shirt",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/featured3.jpg",

    stock: 21,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 4,
    category: "Women",
    type: "t-shirt",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/featured7.jpg",

    stock: 1,
    rating: 4.5,
    numReviews: 12,
    sale: 15,
  },
  {
    id: 1,
    category: "Men",
    type: "t-shirt",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/featured5.5.jpg",

    stock: 1,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 1,
    category: "Women",
    type: "shirt",
    price: 250,
    colors: ["red", "grey"],
    size: ["S", "M", "L"],
    image: "/images/featured4.2.jpg",

    stock: 1,
    rating: 4.5,
    numReviews: 12,
    sale: 25,
  },
];

const brands = [
  "/images/chanel.2.png",
  "/images/ck.png",
  "/images/guess.png",
  "/images/gucci.png",
  "/images/d&g.png",
  "/images/adidas.png",
  "/images/levis.png",
  "/images/versace.png",
];

const brandsServices = [
  {
    icon: "GiTakeMyMoney",
    title: "Original Products",
    content: "We provide money back guarantee if the product is not original.",
  },
  {
    icon: "PiMaskHappyDuotone",
    title: "Satisfaction guarantee",
    content: "Exchange the product you've purchased if it doesn't fit on you.",
  },
  {
    icon: "FaLuggageCart",
    title: "New arrival everyday",
    content: "We update our collections almost everyday.",
  },
  {
    icon: "LiaShippingFastSolid",
    title: "Fast and free shipping",
    content: "We provide fast and free shipping fpr our amazing customers .",
  },
];

const offerHome = {
  text: "35% off this Friday and get special gift",
  image: "/images/offer.jpg",
  btnText: "Grab it now",
};

export {
  products,
  featuredProducts,
  featured,
  currated,
  brands,
  brandsServices,
  offerHome,
};
