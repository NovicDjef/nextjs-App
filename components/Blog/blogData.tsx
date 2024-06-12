import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Conception et maintenance des sites Web",
    paragraph:
      "Nous developpons des site web selon votre convenance pour vous permettre d'attirer d'avantage de la visibilite dans votre activite.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative & design"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Installation des camera video surveillance",
    paragraph:
      "plus de panique maintenant vous pouvez vous faire installer les videos surveillance et controler a distance a partir de votre telephone portable.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Service Installation",
    },
    tags: ["computer"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Installation d'equipements Informatique.",
    paragraph:
      "Vente du materiel informatique, reseau telecomunication et installation des salles informatiques d'entreprise et ou d'etablissement scolaire.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "marketing manager",
    },
    tags: ["design"],
    publishDate: "2024",
  },
];
export default blogData;
