import Crepe from "../Components/Assets/Crepe.svg";
import Café from "../Components/Assets/CaféIcon.svg";
import Gaufre from "../Components/Assets/Gauffre.svg";
import Bubble from "../Components/Assets/bubble.svg";
import Waffle from "../Components/Assets/Waffle.svg";
import Jus from "../Components/Assets/Boissons.svg";
import IceCream from "../Components/Assets/Ice_Cream.svg";
import Malfouf from "../Components/Assets/Malfouf.svg";
import Jwajem from "../Components/Assets/Jwajem.svg";
import CrepeHeader from "../Components/Assets/Crepe_img.jpeg";
import GaufreHeader from "../Components/Assets/Gauffre_img.jpg";
import BubbleHeader from "../Components/Assets/Bubbles_img.jpeg";
import WaffleHeader from "../Components/Assets/waffle.jpeg";
import MalfoufHeader from "../Components/Assets/Malfouf.jpg";
import IceCreamHeader from "../Components/Assets/Rolled_IceCream.jpeg";
import JusHeader from "../Components/Assets/aa.jpeg";
import JwajemHeader from "../Components/Assets/Jwajem.jpg";
import CafeHeader from "../Components/Assets/Café.jpeg";
import Pancake from "../Components/Assets/Pancake.svg";
import PancakeHeader from "../Components/Assets/pancake_img.jpeg";
import Milkshake from "../Components/Assets/Milkshake.svg";
import MilkshakeHeader from "../Components/Assets/Milkshake_img.jpeg";
import MojitoHeader from "../Components/Assets/Mojito.jpeg";
import Mojito from "../Components/Assets/Mojito.svg";

export const iconMap = {
  1: Crepe,
  2: Gaufre,
  3: Bubble,
  4: Waffle,
  5: Malfouf,
  6: IceCream,
  7: Jus,
  8: Jwajem,
  9: Café,
  10: Pancake,
  11: Milkshake,
  12: Mojito,
};

export const menuData = {
  1: {
    category: "Crêpe",
    icon: iconMap[1],
    headerImage: CrepeHeader,
    ModalImages: [CrepeHeader, CrepeHeader, CrepeHeader],
    subcategories: {
      sweet: {
        title: "Sucrée",
        items: [
          {
            id: "s1",
            name: "Chocolat",
            price: "7.000",
          },
          {
            id: "s2",
            name: "Fruits Secs",
            price: "9.000",
          },
          {
            id: "s3",
            name: "Banane",
            price: "9.000",
          },
          {
            id: "s4",
            name: "Oreo",
            price: "9.000",
          },
          {
            id: "s5",
            name: "Speculoos",
            price: "9.000",
          },
          {
            id: "s6",
            name: "Tasty",
            price: "10.000",
            ingredients: "Chocolat / Banane / Fruits secs / Chantilly",
          },
          {
            id: "s7",
            name: "Ferrero",
            price: "10.000",
          },
          {
            id: "s8",
            name: "Snickers",
            price: "10.000",
          },
          {
            id: "s9",
            name: "Pistache",
            price: "12.000",
          },
        ],
      },
      savory: {
        title: "Salée",
        items: [
          {
            id: "sv1",
            name: "Thon",
            price: "7.000",
            ingredients: "Thon / Fromage / Sauce piquante",
          },
          {
            id: "sv2",
            name: "Salami",
            price: "7.000",
            ingredients: "Salami / Fromage / Sauce piquante",
          },
          {
            id: "sv3",
            name: "Jambon",
            price: "7.000",
            ingredients: "Jambon / Fromage / Sauce piquante",
          },
          {
            id: "sv4",
            name: "Tunisienne",
            price: "8.000",
            ingredients: "Thon / Fromage / Sauce piquante / Œuf",
          },
          {
            id: "sv5",
            name: "Spéciale",
            price: "9.000",
            ingredients:
              "Thon / Salami / Jambon / Fromage / Œuf / Sauce piquante ",
          },
          {
            id: "sv6",
            name: "Tasty",
            price: "9.000",
            ingredients:
              "Escalope / Fromage / Légumes grillés / Sauce piquante",
          },
          {
            id: "sv7",
            name: "Pizza",
            price: "9.000",
            ingredients: "Sauce pizza / Fromage Arbi / Thon / Salade",
          },
        ],
      },
    },
  },
  2: {
    category: "Gaufre",
    icon: iconMap[2],
    headerImage: GaufreHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    subcategories: {
      sweet: {
        title: "Sucrée",
        items: [
          {
            id: "s1",
            name: "Chocolat",
            price: "7.000",
          },
          {
            id: "s2",
            name: "Fruits Secs",
            price: "9.000",
          },
          {
            id: "s3",
            name: "Banane",
            price: "9.000",
          },
          {
            id: "s4",
            name: "Oreo",
            price: "9.000",
          },
          {
            id: "s5",
            name: "Speculoos",
            price: "9.000",
          },
          {
            id: "s6",
            name: "Tasty",
            price: "10.000",
            ingredients: "Chocolat / Banane / Fruits secs / Chantilly",
          },
          {
            id: "s7",
            name: "Ferrero",
            price: "10.000",
          },
          {
            id: "s8",
            name: "Snickers",
            price: "10.000",
          },
          {
            id: "s9",
            name: "Pistache",
            price: "12.000",
          },
        ],
      },
      savory: {
        title: "Salée",
        items: [
          {
            id: "sv1",
            name: "Thon",
            price: "7.000",
            ingredients: "Thon / Fromage / Sauce piquante",
          },
          {
            id: "sv2",
            name: "Salami",
            price: "7.000",
            ingredients: "Salami / Fromage / Sauce piquante",
          },
          {
            id: "sv3",
            name: "Jambon",
            price: "7.000",
            ingredients: "Jambon / Fromage / Sauce piquante",
          },
        ],
      },
    },
  },
  3: {
    category: "Bubbles",
    icon: iconMap[3],
    headerImage: BubbleHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "b1",
        name: "Chocolat",
        price: "7.000",
      },
      {
        id: "b2",
        name: "Ice",
        price: "8.500",
      },
      {
        id: "b3",
        name: "Oreo",
        price: "8.500",
      },
      {
        id: "b4",
        name: "Bubble Speculoos",
        price: "8.500",
      },
      {
        id: "b5",
        name: "Bubble Fruits Secs",
        price: "9.000",
      },
      {
        id: "b6",
        name: "Banane",
        price: "9.000",
      },
      {
        id: "b7",
        name: "Tasty",
        price: "12.000",
        ingredients:
          "Chocolat / Fruits secs / Oreo / Speculoos / Ice / Supplément chocolat",
      },
    ],
  },
  4: {
    category: "Waffle",
    icon: iconMap[4],
    headerImage: WaffleHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    subcategories: {
      sweet: {
        title: "Sucrée",
        items: [
          {
            id: "ws1",
            name: "Kids",
            price: "7.000",
            ingredients: "Chocolat / M&Ms / Croquette / Chantilly",
          },
          {
            id: "ws2",
            name: "Ice",
            price: "8.000",
            ingredients: "Chocolat / 2 Boules Glaces / Chantilly",
          },
          {
            id: "ws3",
            name: "Banane",
            price: "8.000",
            ingredients: "Chocolat / Banane / Chantilly",
          },
          {
            id: "ws4",
            name: "Speculoos",
            price: "9.000",
            ingredients:
              "Chocolat / Boule Glace / Biscuit speculoos / Caramel / Chantilly",
          },
          {
            id: "ws5",
            name: "Oreo",
            price: "9.000",
            ingredients: "Chocolat / Boule Glace / Biscuit Oreo / Chantilly",
          },
        ],
      },
      savory: {
        title: "Salée",
        items: [
          {
            id: "wv1",
            name: "Thon",
            price: "7.000",
            ingredients: "Thon / Fromage / Salade / Sauce piquante ",
          },
          {
            id: "wv2",
            name: "Salami",
            price: "7.000",
            ingredients: "Salami / Fromage / Salade / Sauce piquante  ",
          },
          {
            id: "wv3",
            name: "Jambon",
            price: "7.000",
            ingredients: "Jambon / Fromage / Salade / Sauce piquante ",
          },
        ],
      },
    },
  },
  5: {
    category: "Malfouf",
    icon: iconMap[5],
    headerImage: MalfoufHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "m1",
        name: "Malfouf Thon",
        price: "5.500",
        ingredients: "Thon / Fromage / Sauce piquante",
      },
      {
        id: "m2",
        name: "Malfouf Salami",
        price: "5.500",
        ingredients: "Salami / Fromage / Sauce piquante",
      },
      {
        id: "m3",
        name: "Malfouf Jambon",
        price: "5.500",
        ingredients: "Jambon / Fromage / Sauce piquante ",
      },
      {
        id: "m4",
        name: "Malfouf Escalope",
        price: "7.000",
        ingredients: "Escalope / Fromage / Légumes grillés / Sauce piquante ",
      },
      {
        id: "m5",
        name: "Omelette",
        price: "7.000",
      },
    ],
  },
  6: {
    category: "Ice_Cream",
    icon: iconMap[6],
    headerImage: IceCreamHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "r1",
        name: "Arôme Café",
        price: "6.000",
      },
      {
        id: "r2",
        name: "Fruits au choix",
        price: "6.500",
      },
      {
        id: "r3",
        name: "Chocolat au choix",
        price: "7.000",
      },
      {
        id: "r4",
        name: "Yaourt Glacé Petit",
        price: "5.000",
      },
      {
        id: "r5",
        name: "Yaourt Glacé Grand",
        price: "7.000",
      },
      {
        id: "r6",
        name: "Chocolat Glacé/Chaud",
        price: "7.000",
      },
    ],
  },
  7: {
    category: "Jus",
    icon: iconMap[7],
    headerImage: JusHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "j1",
        name: "Jus Citron",
        price: "3.000",
      },
      {
        id: "j2",
        name: "Jus Orange",
        price: "3.000",
      },
      {
        id: "j3",
        name: "Jus Fraise",
        price: "6.500",
      },
      {
        id: "j4",
        name: "Jus Kiwi",
        price: "6.500",
      },
      {
        id: "j5",
        name: "Jus Banane",
        price: "6.500",
      },
      {
        id: "j6",
        name: "Cocktail",
        price: "8.000",
      },
      {
        id: "d1",
        name: "Eau Minérale",
        price: "1.000",
      },
      {
        id: "d2",
        name: "Boisson Gazeuse",
        price: "3.000",
      },
    ],
  },
  8: {
    category: "Jwajem",
    icon: iconMap[8],
    headerImage: JwajemHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    subcategories: {
      chocolat: {
        title: "Chocolat",
        items: [
          {
            id: "jc1",
            name: "Petit",
            price: "7.000",
          },
          {
            id: "jc2",
            name: "Moyen",
            price: "8.000",
          },
          {
            id: "jc3",
            name: "Grand",
            price: "9.500",
          },
        ],
      },
      naturel: {
        title: "Naturel",
        items: [
          {
            id: "jn1",
            name: "Petit",
            price: "6.000",
          },
          {
            id: "jn2",
            name: "Moyen",
            price: "7.000",
          },
          {
            id: "jn3",
            name: "Grand",
            price: "8.500",
          },
        ],
      },
      other: {
        title: "Autres",
        items: [
          {
            id: "js1",
            name: "Oreo",
            price: "8.000",
          },
          {
            id: "js2",
            name: "Speculoos",
            price: "8.000",
          },
          {
            id: "js3",
            name: "Chantilly",
            price: "8.000",
          },
        ],
      },
    },
  },
  9: {
    category: "Café",
    icon: iconMap[9],
    headerImage: CafeHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "c1",
        name: "Express",
        price: "3.000",
      },
      {
        id: "c2",
        name: "Café au lait",
        price: "4.000",
      },
      {
        id: "c3",
        name: "Capuccin",
        price: "3.500",
      },
      {
        id: "c4",
        name: "Américain",
        price: "3.000",
      },
      {
        id: "c5",
        name: "Capuccino",
        price: "5.000",
      },
    ],
  },
  10: {
    category: "Pancake",
    icon: iconMap[10],
    headerImage: PancakeHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "s1",
        name: "Chocolat",
        price: "7.000",
      },
      {
        id: "s2",
        name: "Fruits Secs",
        price: "9.000",
      },
      {
        id: "s3",
        name: "Banane",
        price: "9.000",
      },
      {
        id: "s4",
        name: "Oreo",
        price: "9.000",
      },
      {
        id: "s5",
        name: "Speculoos",
        price: "9.000",
      },
      {
        id: "s7",
        name: "Ferrero",
        price: "10.000",
      },
      {
        id: "s8",
        name: "Snickers",
        price: "10.000",
      },
      {
        id: "s6",
        name: "Tasty",
        price: "12.000",
      },
      {
        id: "s9",
        name: "Pistache",
        price: "12.000",
      },
    ],
  },
  11: {
    category: "Milkshake",
    icon: iconMap[11],
    headerImage: MilkshakeHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "m1",
        name: "Chocolat",
        price: "7.000",
      },
      {
        id: "m2",
        name: "Fraise",
        price: "7.000",
      },
      {
        id: "m3",
        name: "Vanille",
        price: "7.000",
      },
      {
        id: "m4",
        name: "Speculoos",
        price: "8.000",
      },
      {
        id: "m5",
        name: "Oreo",
        price: "8.000",
      },
      {
        id: "m6",
        name: "Nutella",
        price: "8.000",
      },
      {
        id: "m7",
        name: "Snickers",
        price: "10.000",
      },
    ],
  },
  12: {
    category: "Mojito",
    icon: iconMap[12],
    headerImage: MojitoHeader,
    ModalImages: [
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
      "../Components/Assets/Gauffre_img.jpg",
    ],
    items: [
      {
        id: "m1",
        name: "Bleu",
        price: "7.500",
      },
      {
        id: "m2",
        name: "Framboise",
        price: "7.500",
      },
      {
        id: "m3",
        name: "Virgin",
        price: "7.500",
      },
    ],
  },

  // You can continue adding other categories (6, 7, etc.) following the same pattern
};
