import CardContent from "./CardContent";

export default function CardContainer({ feature, isLastItem }) {
  return (
    <div>
      <CardContent feature={feature} />
      <div className={`w-0.5 h-40 bg-teal-300 mx-auto ${isLastItem ? 'hidden' : 'block'}`}></div>
    </div>
  );
}
