import "./CharacterPreview.css";

import SimonBody from "./SVGLayers/SimonBody";

import FeetBaskets from "./SVGLayers/Feet/FeetBaskets";
import FeetSantiags from "./SVGLayers/Feet/FeetSantiags";
import FeetTongs from "./SVGLayers/Feet/FeetTongs";

import LegsJean from "./SVGLayers/Legs/LegsJean";
import LegsShort from "./SVGLayers/Legs/LegsShort";
import LegsShirt from "./SVGLayers/Legs/LegsShirt";

import ChestTeeShirt from "./SVGLayers/Chest/ChestTeeShirt";
import ChestShirt from "./SVGLayers/Chest/ChestShirt";
import ChestTop from "./SVGLayers/Chest/ChestTop";

import HandsComputer from "./SVGLayers/Hands/HandsComputer";
import HandsCocktail from "./SVGLayers/Hands/HandsCocktail";
import HandsButterflyNet from "./SVGLayers/Hands/HandsButterflyNet";

import HeadCap from "./SVGLayers/Head/HeadCap";
import HeadHat from "./SVGLayers/Head/HeadHat";
import HeadCatEars from "./SVGLayers/Head/HeadCatEars";

import AccessoriesGlasses from "./SVGLayers/Accessories/AccessoriesGlasses";
import AccessoriesNecklace from "./SVGLayers/Accessories/AccessoriesNecklace";
import AccessoriesWhiskers from "./SVGLayers/Accessories/AccessoriesWhiskers";

import Gear from "../../Interfaces/GearInterface";

interface CharacterPreviewProps {
  characterGear: Gear;
}

function CharacterPreview(props: CharacterPreviewProps) {
  const { characterGear } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 144 192"
      height="450"
      width="400"
    >
      <title>{"CharacterPreview"}</title>
      {characterGear.hands.id === 0 && <HandsComputer />}
      {characterGear.hands.id === 1 && <HandsCocktail />}
      <SimonBody />
      {characterGear.feet.id === 0 && <FeetBaskets />}
      {characterGear.feet.id === 1 && <FeetTongs />}
      {characterGear.feet.id === 2 && <FeetSantiags />}
      {characterGear.chest.id === 1 && <ChestShirt />}
      {characterGear.chest.id === 0 && <ChestTeeShirt />}
      {characterGear.chest.id === 2 && <ChestTop />}
      {characterGear.legs.id === 0 && <LegsJean />}
      {characterGear.legs.id === 1 && <LegsShort />}
      {characterGear.legs.id === 2 && <LegsShirt />}
      {characterGear.hands.id === 2 && <HandsButterflyNet />}
      {characterGear.head.id === 0 && <HeadCap />}
      {characterGear.head.id === 1 && <HeadHat />}
      {characterGear.head.id === 2 && <HeadCatEars />}
      {characterGear.accessories.id === 0 && <AccessoriesGlasses />}
      {characterGear.accessories.id === 1 && <AccessoriesNecklace />}
      {characterGear.accessories.id === 2 && <AccessoriesWhiskers />}
    </svg>
  );
}

export default CharacterPreview;
