import Link from "next/link";

import CardContainer from "@/components/features/feature-cards/CardContainer"
import CardContent from "./feature-cards/CardContent";

function Features({ features }) {

  return (
    <div className="px-5 bg-gray-100">
      {features.map((feature, index) => {
        const isLastItem = index === features.length - 1 ? true : false;

        if (index !== 0) {
          return <CardContainer feature={feature} key={index} isLastItem={isLastItem} />;
        } else {
          return <CardContent first feature={feature} key={index} />
        }
      })}
    </div>
  );
}

export default Features;