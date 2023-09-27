import CardContent from "./CardContent";
import CardIcon from "./CardIcon";

import { getStyle } from '@/utils/utilities';

export default function CardContainer({ feature, isLastItem, index }) {

  return (
    <>
      <div className={`bg-white pb-10 h-min ${getStyle(index)}` }>
        <CardIcon iconUrl={feature.iconUrl} />
        <CardContent feature={feature} />
      </div>

      <div
        className={`w-2 h-20 bg-teal-300 mx-auto md:w-20 md:h-2 md:self-center ${isLastItem ? "hidden" : "block"}`}
      ></div>
    </>
  );
}
