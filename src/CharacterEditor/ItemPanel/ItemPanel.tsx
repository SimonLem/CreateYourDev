import "./ItemPanel.css";
import ItemSelector from "./ItemSelector/ItemSelector";
import { HandsList } from "../../data/ItemsLists/HandsList";
import { HeadsList } from "../../data/ItemsLists/HeadsList";
import { LegsList } from "../../data/ItemsLists/LegsList";
import { FeetList } from "../../data/ItemsLists/FeetList";
import { AccessoriesList } from "../../data/ItemsLists/AccessoriesList";
import { ChestsList } from "../../data/ItemsLists/ChestsList";

type ItemPanelProps = {
  PanelType: string;
};

function ItemPanel(props: ItemPanelProps) {
  const { PanelType } = props;

  if (PanelType === "left") {
    return (
      <div className="ItemPanelContainer">
        <ItemSelector ItemType="head" ItemList={HeadsList} />
        <ItemSelector ItemType="chest" ItemList={ChestsList} />
        <ItemSelector ItemType="legs" ItemList={LegsList} />
      </div>
    );
  } else if (PanelType === "right") {
    return (
      <div className="ItemPanelContainer">
        <ItemSelector ItemType="hands" ItemList={HandsList} />
        <ItemSelector ItemType="accessories" ItemList={AccessoriesList} />
        <ItemSelector ItemType="feet" ItemList={FeetList} />
      </div>
    );
  } else {
    return <div>error</div>;
  }
}

export default ItemPanel;
