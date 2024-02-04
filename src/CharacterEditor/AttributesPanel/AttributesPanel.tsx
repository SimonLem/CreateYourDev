import { useState, useEffect } from "react";

import "./AttributesPanel.css";

import Gear from "../../Interfaces/GearInterface";

import ProgressionBar from "./ProgressionBar/ProgressionBar";

interface AttributesPanelProps {
  characterGear: Gear;
}

function AttributesPanel(props: AttributesPanelProps) {
  const { characterGear } = props;
  const [devSkill, setDevSkill] = useState(0);
  const [professionalLook, setProfessionalLook] = useState(0);
  const [fun, setFun] = useState(0);
  const [catchSkill, setCatchSkill] = useState(0);

  const totalStatCalcul = () => {
    let newStats = {
      devSkill: 0,
      professionalLook: 0,
      fun: 0,
      catchSkill: 0,
    };

    for (const gear in characterGear) {
      const currentGear = characterGear[gear as keyof typeof characterGear];

      newStats.devSkill += currentGear.stats.devSkill;
      newStats.professionalLook += currentGear.stats.professionalLook;
      newStats.fun += currentGear.stats.fun;
      newStats.catchSkill += currentGear.stats.catchSkill;
    }

    setDevSkill(newStats.devSkill);
    setProfessionalLook(newStats.professionalLook);
    setFun(newStats.fun);
    setCatchSkill(newStats.catchSkill);
  };

  useEffect(() => {
    totalStatCalcul();
  }, [characterGear]);

  return (
    <div className="AttributesContainer">
      <h2>Compétences</h2>
      <div>
        <p> Dev </p>
        <ProgressionBar progression={devSkill} />
      </div>
      <div>
        <p> Image professionelle</p>
        <ProgressionBar progression={professionalLook} />
      </div>
      <div>
        <p> Fun </p>
        <ProgressionBar progression={fun} />
      </div>
      <div>
        <p> Danse</p>
        <ProgressionBar progression={catchSkill} />
      </div>
    </div>
  );
}

export default AttributesPanel;
