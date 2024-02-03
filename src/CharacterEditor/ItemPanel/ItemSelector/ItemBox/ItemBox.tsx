import "./ItemBox.css";
import Item from "../../../../Interfaces/ItemInterface";
import { useState } from "react";

interface ItemBoxProps {
  Item: Item;
}

function ItemBox(props: ItemBoxProps) {
  const { Item } = props;

  const [displayDescriptionFrame, setDisplayDescriptionFrame] =
    useState<boolean>(false);

  //Event for sticky descripton on cursor
  document.addEventListener("mousemove", function (ev) {
    const descriptionFrame = document.getElementById("descriptionFrame");

    if (descriptionFrame) {
      const x = ev.pageX;
      const y = ev.pageY;
      descriptionFrame.style.top = y + 10 + "px";
      descriptionFrame.style.left = x + 10 + "px";
    }
  });

  return (
    <div
      className="ItemBoxContainer"
      onMouseEnter={() => setDisplayDescriptionFrame(true)}
      onMouseLeave={() => setDisplayDescriptionFrame(false)}
    >
      <img src={`${Item.imageName}.png`} width="100%" />
      {displayDescriptionFrame && (
        <div id="descriptionFrame" className="descriptionFrame">
          <p className="itemName">{Item.name}</p>
          <p className="itemDescription">{Item.description}</p>
        </div>
      )}
    </div>
  );
}

export default ItemBox;
