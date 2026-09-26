export type PortfolioItem = {
  image: string;
  label: string;
  type: "facebook" | "cloudinary";
  link?: string;
  slug?: string;
  gallery?: string[];
};

export const workItems: PortfolioItem[] = [
  {
    image: "/work Mercedes -Benz W116.webp",
    label: "Mercedes -Benz W116",
    type: "facebook",
    link:
      "https://www.facebook.com/media/set/?set=a.919113161044222&type=3",
  },

  {
    image: "/work Mitsubishi Mirage.webp",
    label: "Mitsubishi Mirage",
    type: "facebook",
    link:
      "https://www.facebook.com/media/set/?set=a.926187333670138&type=3",
  },

  {
    image: "/work Honda-Civic EG8 Vtech.webp",
    label: "Honda-Civic EG8 Vtech",
    type: "facebook",
    link:
      "https://www.facebook.com/media/set/?set=a.919124061043132&type=3",
  },

  {
    image:
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790420879/WhatsApp_Image_2026-09-26_at_01.14.08.jpg",

    label: "Model Photography",

    type: "cloudinary",

    slug: "model-photography",

    gallery: [
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790420879/WhatsApp_Image_2026-09-26_at_01.14.08.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790420879/WhatsApp_Image_2026-09-26_at_01.13.26.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790420879/WhatsApp_Image_2026-09-26_at_01.13.48.jpg",
    ],
  },

  {
    image: "/work vbj-automobiles.webp",
    label: "Grand Opening - VBJ Automobiles",
    type: "facebook",
    link:
      "https://www.facebook.com/media/set/?set=a.921003990855139&type=3",
  },

  {
    image:
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418373/746909818_17941960848260353_5156841240649981215_n.jpg",

    label: "Wedding Photography",

    type: "cloudinary",

    slug: "wedding-photography",

    gallery: [
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418373/746909818_17941960848260353_5156841240649981215_n.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418372/747790458_17941960881260353_826820831404135603_n.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418371/747536426_17941960827260353_8150870640370286870_n.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418371/749143234_17941960857260353_6592592842052513953_n.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418372/748418894_17941960818260353_8019780028761345109_n.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418372/746147722_17941960866260353_6721182356542023583_n.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418372/746319982_17941960884260353_3881835591567899222_n.jpg",
      "https://res.cloudinary.com/kq5ertj9/image/upload/v1790418371/745886917_17941960836260353_1680945188502583244_n.jpg",
      
    ],
  },
];