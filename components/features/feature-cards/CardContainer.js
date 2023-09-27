import CardContent from "./CardContent";
import CardIcon from "./CardIcon";

import styles from "@/styles/CardContainer.module.css";

export default function CardContainer({ feature, isLastItem, index }) {

  function setMarginTop() {
    switch (index) {
      case 1:
        return styles.mdMarginTop1;
      case 2:
        return styles.mdMarginTop2;
      case 3:
        return styles.mdMarginTop3;
      default:
        break;
    }
  }


  return (
    <>
      <div className={`bg-white pb-10 h-min basis-full ${setMarginTop()}`}>
        <CardIcon iconUrl={feature.iconUrl} />
        <CardContent feature={feature} />
      </div >

      <div
        className={`w-2 h-20 bg-teal-300 mx-auto md:w-20 md:h-2 md:self-center ${isLastItem ? "hidden" : "block"}`}
      ></div>
    </>
  );
}
