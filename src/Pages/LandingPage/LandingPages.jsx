import React, { useState } from "react";
import MenuButton from "./MenuButton/MenuButton";
import NavigationArrows from "./NavigationArrows/NavigationArrows";
import iceAppleFight from "../../Components/Assets/iceCream_apple_fight.gif";
import BlueMarineIceCream from "../../Components/Assets/BlueMarineIcon.gif";
import WhiteCream from "../../Components/Assets/whiteIceCream.gif";
import GreenIceCream from "../../Components/Assets/greenIceCream.gif";
import TastyBlackLogo from "../../Components/Assets/Tasty_BlackLogo.png";
import TastyWhiteLogo from "../../Components/Assets/TastyWhiteLogo.png";
import TastyBlueMarineLogo from "../../Components/Assets/TastyBlueMarineLogo.jpg";
import TastyGreenLogo from "../../Components/Assets/TastyGreenLogo.jpg";
import styles from "./LandingPages.module.css";

const LandingPages = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Define your landing page data
  //testing comment
  const landingPages = [
    {
      id: 1,
      image: BlueMarineIceCream,
      alt: "BlueMarineIceCream",
      logo: TastyBlueMarineLogo,
      logoAlt: "Tasty BlueMarine Logo",
      backgroundColor: "#4521b2", // Light green background for variety
    },
    {
      id: 2,

      image: iceAppleFight,
      alt: "Ice cream apple fight",
      logo: TastyBlackLogo,
      logoAlt: "Tasty Black Logo",
      backgroundColor: "#ffecb3",
    },
    {
      id: 3,
      image: GreenIceCream,
      alt: "Green IceCream",
      logo: TastyGreenLogo,
      logoAlt: "Tasty Green Logo",
      backgroundColor: "#224456", // Light purple background for variety
    },

    {
      id: 4,
      image: WhiteCream,
      alt: "White IceCream",
      logo: TastyWhiteLogo,
      logoAlt: "Tasty White Logo",
      backgroundColor: "#ffffff", // Light purple background for variety
    },
  ];

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const currentLandingPage = landingPages[currentPage];

  return (
    <div
      className={styles.landingContainer}
      style={{ backgroundColor: currentLandingPage.backgroundColor }}
    >
      <div className={styles.imageContainer}>
        <img
          src={currentLandingPage.image}
          alt={currentLandingPage.alt}
          className={styles.landingImage}
          key={currentLandingPage.id} // Force re-render for smooth transitions
        />
      </div>

      <img
        src={currentLandingPage.logo}
        alt={currentLandingPage.logoAlt}
        className={styles.logo}
      />

      <MenuButton />

      <NavigationArrows
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={landingPages.length}
      />
    </div>
  );
};

export default LandingPages;
