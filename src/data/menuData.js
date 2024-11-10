import Crepe from "../Components/Assets/Crepe.svg";
import Café from "../Components/Assets/CaféIcon.svg";
import Gaufre from "../Components/Assets/Gauffre.svg";
import Bubble from "../Components/Assets/bubble.svg";
import Waffle from "../Components/Assets/Waffle.svg";
import Jus from "../Components/Assets/Boissons.svg";
import IceCream from "../Components/Assets/Ice_Cream.svg";
import Malfouf from "../Components/Assets/Malfouf.svg";
import Jwajem from "../Components/Assets/Jwajem.svg";

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
};

export const menuData = {
  1: {
    category: "Crêpe",
    icon: iconMap[1],
    subcategories: {
      sweet: {
        title: "Crêpe Sucrée",
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
        title: "Crêpe Salée",
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
    subcategories: {
      sweet: {
        title: "Gaufre Sucrée",
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
        title: "Gaufre Salée",
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
    subcategories: {
      sweet: {
        title: "Waffle Sucrée",
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
        title: "Waffle Salée",
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
    category: "Glaces Roulées",
    icon: iconMap[6],
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
    subcategories: {
      juices: {
        title: "Jus Frais",
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
        ],
      },
      other: {
        title: "Boissons et Eaux",
        items: [
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
    },
  },
  8: {
    category: "Jwajem",
    icon: iconMap[8],
    subcategories: {
      chocolat: {
        title: "Jwajem Chocolat",
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
        title: "Jwajem Naturel",
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
    items: [
      {
        id: "c1",
        name: "Express",
        price: "3.000",
        ingredients: "Café express",
      },
      {
        id: "c2",
        name: "Café au lait",
        price: "3.500",
        ingredients: "Café / Lait chaud",
      },
      {
        id: "c3",
        name: "Capuccin",
        price: "3.500",
        ingredients: "Café / Lait chaud / Mousse de lait",
      },
      {
        id: "c4",
        name: "Américain",
        price: "3.000",
        ingredients: "Café allongé",
      },
      {
        id: "c5",
        name: "Capuccino",
        price: "5.000",
        ingredients: "Café / Lait / Mousse de lait / Chantilly / Cacao",
      },
    ],
  },

  // You can continue adding other categories (6, 7, etc.) following the same pattern
};
