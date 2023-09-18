import CardContent from "./CardContent";
import CardIcon from "./CardIcon";

export default function CardContainer({ feature, isLastItem }) {

  return (
    <div className="bg-white">
      <CardIcon iconUrl={feature.iconUrl}/>
      <CardContent feature={feature} />
      <div className={`w-0.5 h-40 bg-teal-300 mx-auto ${isLastItem ? 'hidden' : 'block'}`}></div>
    </div>
  );
}
