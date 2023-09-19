import CardContent from "./CardContent";
import CardIcon from "./CardIcon";

export default function CardContainer({ feature, isLastItem }) {
  return (
    <>
      <div className="bg-white pb-10">
        <CardIcon iconUrl={feature.iconUrl} />
        <CardContent feature={feature} />
      </div>

      <div
          className={`w-2 h-20 bg-teal-300 mx-auto ${
            isLastItem ? "hidden" : "block"
          }`}
        ></div>      
    </>
  );
}
