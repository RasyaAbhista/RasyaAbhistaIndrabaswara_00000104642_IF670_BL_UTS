import React, { createContext, useContext, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────
export type Brand = {
  id: string;
  name: string;
  logo: any;
  logoDark?: any;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  image: any;
  description?: string;
  rating?: number;
  reviewCount?: number;
};

type ProductContextType = {
  brands: Brand[];
  recommended: Product[];
  products: Product[];
  likedProducts: Record<string, boolean>;
  toggleLike: (id: string) => void;
  wishlist: Product[];
};

// ── Data ─────────────────────────────────────────────────────────
const BRANDS: Brand[] = [
  {
    id: "1",
    name: "Gibson",
    logo: require("../../assets/images/TopBrands/gibson-1-logo-png-transparent.png"),
    logoDark: require("../../assets/images/TopBrands/gibson_transparent_logo_fixed2.png"),
  },
  {
    id: "2",
    name: "Fender",
    logo: require("../../assets/images/TopBrands/Fender Black.png"),
    logoDark: require("../../assets/images/TopBrands/Fender white.png"),
  },
  {
    id: "3",
    name: "Ibanez",
    logo: require("../../assets/images/TopBrands/Ibanez-Logo.png"),
    logoDark: require("../../assets/images/TopBrands/Ibanez white.png"),
  },
  {
    id: "4",
    name: "Yamaha",
    logo: require("../../assets/images/TopBrands/Yamaha_logo_PNG5.png"),
    logoDark: require("../../assets/images/TopBrands/289-2896100_yamaha-png-yamaha-logo-white-yamaha-outboard-motors.png"),
  },
  {
    id: "5",
    name: "Taylor",
    logo: require("../../assets/images/TopBrands/Taylor black.png"),
    logoDark: require("../../assets/images/TopBrands/Taylor White.png"),
  },
];

const RECOMMENDED: Product[] = [
  {
    id: "r1",
    name: "Les Paul Modern",
    price: 47500000,
    image: require("../../assets/HomePage/Less_Paul_Modern_image_1-removebg-preview.png"),
    description:
      "The Les Paul Modern features several contemporary updates that make it very comfortable and easy to play. The asymmetric SlimTaper neck profile and compound-radius fingerboard make it very comfortable.",
    rating: 4.2,
    reviewCount: 321,
  },
  {
    id: "r2",
    name: "Gibson SJ-200",
    price: 78000000,
    image: require("../../assets/HomePage/4050e1b99523467cd30794b5a9017169-removebg-preview.png"),
    description:
      "The Gibson SJ-200 is the King of Flat Tops. With its oversized jumbo body, this guitar delivers a powerful, rich tone perfect for any performance.",
    rating: 4.5,
    reviewCount: 215,
  },
  {
    id: "r3",
    name: "Ibanez RG550",
    price: 21000000,
    image: require("../../assets/HomePage/2d2b8da588e626db86fa1e5f41f074d8-removebg-preview.png"),
    description:
      "The Ibanez RG550 is a legendary high-performance guitar built for speed and precision. Featuring a basswood body and maple neck for bright, punchy tone.",
    rating: 4.3,
    reviewCount: 178,
  },
  {
    id: "r4",
    name: "Fender Strat",
    price: 28500000,
    image: require("../../assets/HomePage/4e64b54754a99431d632b0a6b9735d99-removebg-preview.png"),
    description:
      "The Fender Stratocaster is one of the most iconic electric guitars ever made. Its comfortable contoured body and versatile three-pickup configuration make it suitable for any genre.",
    rating: 4.6,
    reviewCount: 512,
  },
  {
    id: "r5",
    name: "Martin D-28",
    price: 52000000,
    image: require("../../assets/HomePage/5c7a4dd1452edc3391f5078eae937fe9-removebg-preview.png"),
    description:
      "The Martin D-28 is a flagship acoustic guitar with a rich heritage. Featuring a solid Sitka spruce top and East Indian rosewood back and sides for legendary tone.",
    rating: 4.7,
    reviewCount: 389,
  },
];

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Les Paul Modern",
    price: 47500000,
    image: require("../../assets/HomePage/Less_Paul_Modern_image_1-removebg-preview.png"),
    description:
      "The Les Paul Modern features several contemporary updates that make it very comfortable and easy to play. The asymmetric SlimTaper neck profile and compound-radius fingerboard make it very comfortable.",
    rating: 4.2,
    reviewCount: 321,
  },
  {
    id: "p2",
    name: "Gibson SJ-200",
    price: 78000000,
    image: require("../../assets/HomePage/4050e1b99523467cd30794b5a9017169-removebg-preview.png"),
    description:
      "The Gibson SJ-200 is the King of Flat Tops. With its oversized jumbo body, this guitar delivers a powerful, rich tone perfect for any performance.",
    rating: 4.5,
    reviewCount: 215,
  },
  {
    id: "p3",
    name: "Ibanez RG550",
    price: 21000000,
    image: require("../../assets/HomePage/2d2b8da588e626db86fa1e5f41f074d8-removebg-preview.png"),
    description:
      "The Ibanez RG550 is a legendary high-performance guitar built for speed and precision. Featuring a basswood body and maple neck for bright, punchy tone.",
    rating: 4.3,
    reviewCount: 178,
  },
  {
    id: "p4",
    name: "Fender Stratocaster",
    price: 28500000,
    image: require("../../assets/HomePage/4e64b54754a99431d632b0a6b9735d99-removebg-preview.png"),
    description:
      "The Fender Stratocaster is one of the most iconic electric guitars ever made. Its comfortable contoured body and versatile three-pickup configuration make it suitable for any genre.",
    rating: 4.6,
    reviewCount: 512,
  },
  {
    id: "p5",
    name: "Martin D-28",
    price: 52000000,
    image: require("../../assets/HomePage/5c7a4dd1452edc3391f5078eae937fe9-removebg-preview.png"),
    description:
      "The Martin D-28 is a flagship acoustic guitar with a rich heritage. Featuring a solid Sitka spruce top and East Indian rosewood back and sides for legendary tone.",
    rating: 4.7,
    reviewCount: 389,
  },
  {
    id: "p6",
    name: "PRS SE Custom",
    price: 13500000,
    image: require("../../assets/HomePage/PRS_SE-removebg-preview.png"),
    description:
      "The PRS SE Custom delivers professional-quality tone and playability at an accessible price. Perfect for players who demand premium features without the premium cost.",
    rating: 4.1,
    reviewCount: 143,
  },
  {
    id: "p7",
    name: "Epiphone Casino",
    price: 11000000,
    image: require("../../assets/HomePage/Epiphone_Casino-removebg-preview.png"),
    description:
      "The Epiphone Casino is a fully hollow thinline archtop with a rich history in rock and roll. Its warm, resonant tone and comfortable playability make it a timeless classic.",
    rating: 4.0,
    reviewCount: 97,
  },
  {
    id: "p8",
    name: "Taylor 814ce",
    price: 63000000,
    image: require("../../assets/HomePage/taylor-removebg-preview.png"),
    description:
      "The Taylor 814ce is a premier acoustic-electric guitar featuring a Sitka spruce top with Indian rosewood back and sides. Known for its articulate, balanced tone.",
    rating: 4.8,
    reviewCount: 264,
  },
  {
    id: "p9",
    name: "Gretsch G2622",
    price: 9500000,
    image: require("../../assets/HomePage/Gretshc-removebg-preview.png"),
    description:
      "The Gretsch G2622 Streamliner is a double-cutaway center-block guitar with great versatility. Features Broad'Tron pickups for that classic Gretsch sparkle.",
    rating: 3.9,
    reviewCount: 88,
  },
  {
    id: "p10",
    name: "ESP LTD EC-1000",
    price: 15750000,
    image: require("../../assets/HomePage/esp-removebg-preview.png"),
    description:
      "The ESP LTD EC-1000 is a high-end guitar built for serious players. With active EMG pickups and set-neck construction, it delivers exceptional tone and sustain.",
    rating: 4.4,
    reviewCount: 201,
  },
];

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>(
    {},
  );

  const toggleLike = (id: string) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const wishlist = PRODUCTS.filter((p) => likedProducts[p.id]);

  return (
    <ProductContext.Provider
      value={{
        brands: BRANDS,
        recommended: RECOMMENDED,
        products: PRODUCTS,
        likedProducts,
        toggleLike,
        wishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
