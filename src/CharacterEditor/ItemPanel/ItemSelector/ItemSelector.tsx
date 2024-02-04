import "./ItemSelector.css";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ItemBox from "./ItemBox/ItemBox";
import Item from "../../../Interfaces/ItemInterface";

import { useState } from "react";
import { useCharacterContext } from "../../../Contexts/CharacterContext";

const ItemTypeLabels = {
  head: "Tête",
  chest: "Torse",
  legs: "Jambes",
  hands: "Arme",
  accessories: "Accessoire",
  feet: "Pieds",
};

interface ItemSelectorProps {
  ItemType: string;
  ItemList: Array<Item>;
}

function ItemSelector(props: ItemSelectorProps) {
  const { ItemType, ItemList } = props;

  const { characterGear, setCharacterGear } = useCharacterContext();

  const [displayedItemIndex, setDisplayedItemIndex] = useState(0);

  const handleSelectLeft = () => {
    if (displayedItemIndex) {
      setCharacterGear({
        ...characterGear,
        [ItemType]: ItemList[displayedItemIndex - 1],
      });
      setDisplayedItemIndex(displayedItemIndex - 1);
    } else {
      setCharacterGear({
        ...characterGear,
        [ItemType]: ItemList[ItemList.length - 1],
      });
      setDisplayedItemIndex(ItemList.length - 1);
    }
  };

  const handleSelectRight = () => {
    if (displayedItemIndex === ItemList.length - 1) {
      setCharacterGear({
        ...characterGear,
        [ItemType]: ItemList[0],
      });
      setDisplayedItemIndex(0);
    } else {
      setCharacterGear({
        ...characterGear,
        [ItemType]: ItemList[displayedItemIndex + 1],
      });
      setDisplayedItemIndex(displayedItemIndex + 1);
    }
  };

  return (
    <div className="column">
      {ItemTypeLabels[ItemType as keyof typeof ItemTypeLabels]}
      <div className="ItemSelectorContainer">
        <FontAwesomeIcon
          icon={faSortUp}
          className="LeftArrow"
          onClick={handleSelectLeft}
        />
        <ItemBox Item={characterGear[ItemType as keyof typeof characterGear]} />
        <FontAwesomeIcon
          icon={faSortUp}
          className="RightArrow"
          onClick={handleSelectRight}
        />
      </div>
    </div>
  );
}

export default ItemSelector;
