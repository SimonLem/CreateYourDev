import { createContext, useContext, useState } from "react"

import Gear from "../Interfaces/GearInterface"

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

interface ContextInterface {
    characterGear: Gear,
    setCharacterGear:(c: Gear) => void,
}

export const GearContext = createContext<ContextInterface>({
    characterGear: defaultGear,
    setCharacterGear: () => {},
})

export const useGearContext = () => useContext(GearContext)