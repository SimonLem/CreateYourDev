import { useState } from "react";

import "./CharacterEditor.css";

import CharacterPreview from "./CharacterPreview/CharacterPreview";
import ItemPanel from "./ItemPanel/ItemPanel";
import AttributesPanel from "./AttributesPanel/AttributesPanel";

import Gear from "../Interfaces/GearInterface";

import { CharacterContext } from "../Contexts/CharacterContext";

import { HeadsList } from "../data/ItemsLists/HeadsList";
import { ChestsList } from "../data/ItemsLists/ChestsList";
import { LegsList } from "../data/ItemsLists/LegsList";
import { FeetList } from "../data/ItemsLists/FeetList";
import { AccessoriesList } from "../data/ItemsLists/AccessoriesList";
import { HandsList } from "../data/ItemsLists/HandsList";

const defaultGear: Gear = {
  head: HeadsList[0],
  chest: ChestsList[0],
  legs: LegsList[0],
  feet: FeetList[0],
  accessories: AccessoriesList[0],
  hands: HandsList[0],
};

function CharacterEditor() {
  const [characterGear, setCharacterGear] = useState<Gear>(defaultGear);

  return (
    <div className="CharacterEditorContainer">
      <CharacterContext.Provider value={{ characterGear, setCharacterGear }}>
        <ItemPanel PanelType="left" />
        <CharacterPreview characterGear={characterGear} />
        <ItemPanel PanelType="right" />
        <AttributesPanel characterGear={characterGear} />
      </CharacterContext.Provider>
    </div>
  );
}

export default CharacterEditor;
