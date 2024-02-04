import "./ProgressionBar.css";

interface ProgressionBarProps {
  progression: number;
}

function ProgressionBar(props: ProgressionBarProps) {
  const { progression } = props;

  const progressionInPercentage = progression / 12;

  return (
    <div className="ProgressionBar">
      <div
        className="ProgressionBarFilled"
        style={{ width: progressionInPercentage * 200 + "px" }}
      ></div>
    </div>
  );
}

export default ProgressionBar;
